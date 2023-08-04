import { FC, PropsWithChildren } from "react";
import { Theme } from "rehype-pretty-code";

export interface Post {
  publishedAt: string;
  slug: string;
  title: string;
  summary: string;
  tags: string;
  draft?: boolean;
}

export interface Config {
  theme: Theme;
  pagesDir: string;
  postsDir: string;
  distDir: string;
  publicDir: string;
  baseUrl: string;
  blogUrl: string;
  author: string;
  description: string;
  language: string;
  title: string;
  layoutComponent: FC<PropsWithChildren>;
}

export interface State {
  pages: string[];
  posts: Post[];
  config: Config;
}
