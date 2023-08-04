import React, { PropsWithChildren } from "react";
import { Config, Post } from "./types.ts";

function StructuredData({
  config,
  post,
  url,
  keywords,
}: {
  config: Config;
  post: Post;
  url: string;
  keywords: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    url,
    datePublished: post.publishedAt,
    dateCreated: post.publishedAt,
    dateModified: post.publishedAt,
    keywords: keywords.replaceAll(",", ""),
    description: post.summary,
    author: {
      "@type": "Person",
      name: config.author,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface PageProps {
  config: Config;
  slug?: string;
  post?: Post;
}

export function Page({
  children,
  config,
  slug,
  post,
}: PropsWithChildren<PageProps>) {
  const fullTitle =
    slug || post ? `${slug ?? post?.title} | ${config.title}` : config.title;
  const fullDescription = post?.summary ?? config.description;
  const fullUrl = slug
    ? `${config.baseUrl}${slug ?? `/${config.blogUrl}/${post?.slug}`}`
    : config.baseUrl;
  const keywords = post?.tags ?? "tech, development";

  return (
    <html lang={config.language.slice(0, 2)}>
      <head>
        <title>{fullTitle}</title>

        <link rel="canonical" href={fullUrl} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="title" content={fullTitle} />
        <meta name="description" content={fullDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={config.author} />

        <meta property="og:type" content={post ? "article" : "website"} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        {/* <meta property="og:image" content="/og.png" /> */}

        <link href="/styles.css" rel="stylesheet" />

        {post && (
          <StructuredData
            config={config}
            post={post}
            url={fullUrl}
            keywords={keywords}
          />
        )}

        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS 2.0"
          href="/feed.rss"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
