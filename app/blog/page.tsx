/* page.tsx */
import { unstable_cache } from "next/cache";
import Link from "next/link";
import { BlogQueryResult } from "./types";
import { createClient } from "contentful";

export const revalidate = 300; // Revalidate every 5 minutes

const client = createClient({
  space: process.env.SPACE_ID!,
  accessToken: process.env.ACCESS_TOKEN!,
});

const getBlogEntries = unstable_cache(
  async (): Promise<BlogQueryResult> => {
    const entries = await client.getEntries({
      content_type: "blogPost",
      order: ["-fields.date"],

      // optional: reduce payload (see #3)
      // select: ["fields.slug", "fields.title", "fields.date"],
    })

    return entries as unknown as BlogQueryResult
  },
  ["blog-entries"], // cache key
  { revalidate: 300 }
)


export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default async function Page() {
  const blogEntries = await getBlogEntries();

  return (
    <main>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <div className="flex flex-col space-y-1 mb-4">
      {blogEntries.items.map((singlePost) => {
        const { slug, title, date } = singlePost.fields;

        return (
          <div key={slug}>
            <Link className="flex flex-col space-y-1 mb-4" href={`/blog/${slug}`}>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-auto tabular-nums">{new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {title}
              </p>
            </div>
            </Link>
          </div>
        );
      })}
      </div>
    </main>
  );
}
