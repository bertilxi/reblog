import { defineConfig } from "reblog";
import { Layout } from "./components/layout.tsx";

export default defineConfig({
  baseUrl: "https://www.example.site",
  author: "Some Author",
  title: "Sample site",
  description: "some random blog",
  layoutComponent: Layout,
});
