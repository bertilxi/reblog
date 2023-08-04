import { getPosts } from "reblog";
import { Layout } from "~/components/layout.tsx";
import { formatDate } from "~/utils/date.ts";

const posts = getPosts();

export default function Blog() {
  return (
    <Layout>
      <section className="prose prose-zinc dark:prose-invert">
        <h1>Lazy thoughts</h1>
        {posts
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <div key={post.slug} className="flex flex-col space-y-1 mb-4">
              <div className="w-full flex">
                <a
                  className="font-bold no-underline"
                  href={`/blog/${post.slug}`}
                >
                  {post.title}
                </a>
                <div className="flex-1" />
                <span className="text-sm mb-2">
                  {formatDate(post.publishedAt)}
                </span>
              </div>
              <div className="text-zinc-400">{post.summary}</div>
            </div>
          ))}
      </section>
    </Layout>
  );
}
