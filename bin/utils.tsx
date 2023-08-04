import { evaluate } from "@mdx-js/mdx";
import child from "child_process";
import fs, { readFileSync } from "fs";
import { readdir, writeFile } from "fs/promises";
import yaml from "js-yaml";
import { mkdirp } from "mkdirp";
import path from "path";
import React, { PropsWithChildren } from "react";
import { renderToString } from "react-dom/server";
import * as runtime from "react/jsx-runtime";
import rehypePrettyCode from "rehype-pretty-code";
import remarkFrontmatter, { Root } from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { promisify } from "util";
import xml from "xml";
import moonlight from "./moonlight-ii.ts";
import { Page } from "./page.tsx";
import { Config, Post, State } from "./types.ts";

const root = path.resolve(process.cwd());

const state: State = {
  pages: [],
  posts: [],
  config: {
    layoutComponent: function Layout({ children }: PropsWithChildren) {
      return (
        <main className="max-w-2xl flex flex-col mx-auto px-10">
          {children}
        </main>
      );
    },
    language: "en-US",
    pagesDir: "pages",
    postsDir: "posts",
    distDir: "dist",
    publicDir: "public",
    theme: moonlight,
    baseUrl: "https://www.google.com",
    blogUrl: "blog",
    author: "The Writer",
    title: "Blogging",
    description: "A great blog",
  },
};

export const exec = promisify(child.exec);

const DOCTYPE = "<!DOCTYPE html>";

export async function defineConfig(config: Partial<Config>) {
  state.config = {
    ...state.config,
    ...config,
  };

  return state.config;
}

async function buildPosts() {
  const files = (await readdir(path.join(root, state.config.postsDir))).filter(
    (file) => file.endsWith(".mdx")
  );

  for (const filePath of files) {
    const content = fs.readFileSync(
      path.join(state.config.postsDir, filePath),
      "utf8"
    );

    let tree: Root;

    const { default: MdxContent } = await evaluate(content, {
      ...runtime,
      Fragment: (runtime as any).Fragment as any,
      useDynamicImport: true,
      baseUrl: import.meta.url,
      development: false,
      remarkPlugins: [
        [remarkFrontmatter, ["yaml", "toml"]],
        () => (root) => {
          tree = root;
        },
        remarkGfm,
      ],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: state.config.theme,
          },
        ],
      ],
    });

    const frontmatter = tree!.children?.find(
      (child) => child.type === "yaml"
    ) as any;
    const post: Post = yaml.load(frontmatter.value) as any;

    if (post.draft) {
      continue;
    }

    post.slug = filePath.replace(".mdx", "");

    state.posts.push(post);

    const result = renderToString(
      <Page config={state.config} post={post}>
        <state.config.layoutComponent>
          <article className="prose prose-zinc dark:prose-invert">
            <MdxContent />
          </article>
        </state.config.layoutComponent>
      </Page>
    );

    const prettyRoute = path.join(filePath.replace(".mdx", ""), "index.html");

    await mkdirp(
      path.join(
        root,
        state.config.distDir,
        state.config.blogUrl,
        filePath.replace(".mdx", "")
      )
    );

    await writeFile(
      path.join(root, state.config.distDir, state.config.blogUrl, prettyRoute),
      DOCTYPE.concat(result),
      "utf8"
    );

    state.pages.push(
      `${state.config.baseUrl}/${state.config.blogUrl}/${post.slug}`
    );
  }

  await writeFile(
    path.join(root, state.config.distDir, "posts.json"),
    JSON.stringify(state.posts),
    "utf8"
  );
}

async function buildPages() {
  const files = (await readdir(path.join(root, state.config.pagesDir))).filter(
    (file) => file.endsWith(".tsx")
  );

  for (const filePath of files) {
    if (!filePath.endsWith(".tsx")) {
      continue;
    }
    const isIndex = filePath === "index.tsx";
    const slug = filePath.replace(".tsx", "");
    const { default: Component } = await import(
      path.join(root, state.config.pagesDir, filePath)
    );

    const result = renderToString(
      <Page config={state.config} slug={isIndex ? "" : slug}>
        <Component />
      </Page>
    );

    if (!isIndex) {
      await mkdirp(path.join(root, state.config.distDir, slug));
    }

    const prettyRoute = isIndex ? "index.html" : path.join(slug, "index.html");
    await writeFile(
      path.join(root, state.config.distDir, prettyRoute),
      DOCTYPE.concat(result),
      "utf8"
    );
    state.pages.push(
      isIndex ? state.config.baseUrl : `${state.config.baseUrl}/${slug}`
    );
  }
}

async function buildSitemap() {
  const urls = state.pages
    .map(
      (page) =>
        `  <url>
    <loc>${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>\n`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

${urls}
</urlset>
  `;

  await writeFile(
    path.join(root, state.config.distDir, "sitemap.xml"),
    sitemap,
    "utf8"
  );
}

async function buildRss() {
  const feedObject = {
    rss: [
      {
        _attr: {
          version: "2.0",
          "xmlns:atom": "http://www.w3.org/2005/Atom",
        },
      },
      {
        channel: [
          {
            "atom:link": {
              _attr: {
                href: `${state.config.baseUrl}/feed.rss`,
                rel: "self",
                type: "application/rss+xml",
              },
            },
          },
          {
            title: state.config.author,
          },
          {
            link: state.config.baseUrl,
          },
          { description: state.config.description },
          { language: "en-US" },
          ...state.posts
            .sort(
              (a, b) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
            )
            .map((post) => {
              const feedItem = {
                item: [
                  { title: post.title },
                  {
                    pubDate: new Date(post.publishedAt as string).toUTCString(),
                  },
                  {
                    guid: [
                      { _attr: { isPermaLink: true } },
                      `${state.config.baseUrl}/${state.config.blogUrl}/${post.slug}/`,
                    ],
                  },
                  {
                    description: {
                      _cdata: post.summary,
                    },
                  },
                ],
              };
              return feedItem;
            }),
        ],
      },
    ],
  };

  const feed = '<?xml version="1.0" encoding="UTF-8"?>' + xml(feedObject);

  await writeFile(
    path.join(root, state.config.distDir, "feed.rss"),
    feed,
    "utf8"
  );
}

async function buildCss() {
  const stylesInput = path.join(root, state.config.pagesDir, "styles.css");
  const stylesOutput = path.join(root, state.config.distDir, "styles.css");

  await exec(`npx tailwindcss -i ${stylesInput} -o ${stylesOutput} -m`);
}

export async function build() {
  await import(path.join(root, "reblog.config.ts"));

  fs.rmSync(state.config.distDir, { recursive: true, force: true });

  await mkdirp(path.join(root, state.config.distDir, state.config.blogUrl));
  await exec(
    `cp -rf ${path.join(root, state.config.publicDir, "*")} ${
      state.config.distDir
    }`
  );
  await buildPosts();
  await buildPages();
  await buildSitemap();
  await buildRss();
  await buildCss();
}

export async function dev() {
  await build();

  console.log("running @ http://localhost:3000");
  await exec(`npx serve ${state.config.distDir}`);
}

export function getPosts(): Post[] {
  try {
    return JSON.parse(
      readFileSync(
        path.join(process.cwd(), state.config.distDir, "posts.json"),
        "utf8"
      )
    );
  } catch (error) {
    return [];
  }
}
