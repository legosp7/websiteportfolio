/* page.tsx */
import Link from "next/link";
import { BlogQueryResult } from "./types";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE_ID!,
  accessToken: process.env.ACCESS_TOKEN!,
});

const getBlogEntries = async (): Promise<BlogQueryResult> => {
  const entries = await client.getEntries({ content_type: "blogPost" });
  return entries as unknown as BlogQueryResult;
};

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default async function Page() {
  const blogEntries = await getBlogEntries();

  return (
    <main className="flex min-h-screen flex-col p-24 gap-y-8">
      {blogEntries.items.map((singlePost) => {
        const { slug, title, date } = singlePost.fields;

        return (
          <div key={slug}>
            <Link href={`/blog/${slug}`}>
              <h2 className="font-extrabold text-xl">{title}</h2>
              <span className="text-gray-500">
                Posted on{" "}
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
