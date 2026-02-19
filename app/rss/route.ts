import { createClient } from "contentful"
import { baseUrl } from "@/app/sitemap" // or use a relative import if you don't have @ alias

const client = createClient({
  space: process.env.SPACE_ID!,
  accessToken: process.env.ACCESS_TOKEN!,
})

function escapeXml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

export async function GET() {
  const entries = await client.getEntries({
    content_type: "blogPost",
    select: ["fields.slug", "fields.title", "fields.date"] as any, // summary optional
    limit: 1000,
  })

  // Contentful SDK types are loose here; treat as any safely.
  const posts = (entries.items as any[])
    .map((item) => ({
      slug: item?.fields?.slug as string | undefined,
      title: item?.fields?.title as string | undefined,
      date: item?.fields?.date as string | undefined,
    }))
    .filter((p) => p.slug && p.title && p.date)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())

  const itemsXml = posts
    .map((post) => {
      const link = `${baseUrl}/blog/${post.slug}`
      return `<item>
  <title>${escapeXml(post.title!)}</title>
  <link>${escapeXml(link)}</link>
  <guid isPermaLink="true">${escapeXml(link)}</guid>
  <description></description>
  <pubDate>${new Date(post.date!).toUTCString()}</pubDate>
</item>`
    })
    .join("\n")

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>My Portfolio</title>
    <link>${escapeXml(baseUrl)}</link>
    <description>${escapeXml("This is my portfolio RSS feed")}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${itemsXml}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  })
}
