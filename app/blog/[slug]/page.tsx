import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BlogItem } from "../types";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

const client = createClient({
  space: process.env.SPACE_ID!,
  accessToken: process.env.ACCESS_TOKEN!
});

export async function generateStaticParams() {
  const queryOptions = {
    content_type: "blogPost",
    select: "fields.slug",
  };

  const articles = await client.getEntries(queryOptions);

  return articles.items.map((article) => ({
    slug: article.fields.slug,
  }));
}

const fetchBlogPost = async (slug: string): Promise<BlogItem> => {
  const queryOptions = {
    content_type: "blogPost",
    "fields.slug[match]": slug,
  };

  const queryResult = await client.getEntries(queryOptions);

  return queryResult.items[0] as unknown as BlogItem;
};

/* src/app/blog/[slug]/page.tsx */ 
type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
 const { slug } = await params;

 const article = await fetchBlogPost(slug);
 const { title, date, content } = article.fields;

 const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = node?.data?.target
        const fields = asset?.fields

        if (!fields) return null

        const file = fields.file
        const title = fields.title ?? "Embedded asset"

        // file.url can be like "//images.ctfassets.net/..."
        const src = file?.url
        const width = file?.details?.image?.width
        const height = file?.details?.image?.height

        if (!src) return null

        const normalizedSrc = src.startsWith("//") ? `https:${src}` : src

        // If it's an image, use Next Image; otherwise show a link
        const contentType = file?.contentType ?? ""
        const isImage = contentType.startsWith("image/")

        if (!isImage) {
          return (
            <p>
              <a href={normalizedSrc} target="_blank" rel="noreferrer">
                {title}
              </a>
            </p>
          )
        }

        // width/height are recommended for next/image
        if (!width || !height) {
          return (
            <img
              src={normalizedSrc}
              alt={title}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )
        }

        return (
          <figure className="my-6">
            <Image
              src={normalizedSrc}
              alt={title}
              width={width}
              height={height}
              className="rounded-lg"
            />
            {fields.description ? (
              <figcaption className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {fields.description}
              </figcaption>
            ) : null}
          </figure>
        )
      },
    },
  }

 return (
   <main className="min-h-screen flex justify-left">
     <div className="max-w-2xl">
       <h1 className="title font-semibold text-2xl tracking-tighter">{title}</h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Posted on{" "}
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        </div>
        <article className="prose dark:prose-invert">
          { documentToReactComponents(content as any, renderOptions) }
        </article>
     </div>
   </main>
 );
}