import { Layout } from "~/components/layout.tsx";

export default function Home() {
  return (
    <Layout>
      <section className="prose prose-zinc dark:prose-invert">
        <h1>Welcome to my site</h1>

        <p className="mb-4">
          I am a <span className="font-bold">random guy</span> writing things.
        </p>
      </section>
    </Layout>
  );
}
