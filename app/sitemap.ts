import { createClient } from "contentful"

export const baseUrl = "https://pancakeiscute.com"

const client = createClient({
  space: process.env.SPACE_ID!,
  accessToken: process.env.ACCESS_TOKEN!,
})

export default async function sitemap() {
  const entries = await client.getEntries({
    content_type: "blogPost",
    select: ["fields.slug", "fields.date"] as any,
    limit: 1000,
  })

  const blogs = (entries.items as any[])
    .map((item) => {
      const slug = item?.fields?.slug as string | undefined
      const date = item?.fields?.date as string | undefined

      if (!slug || !date) return null

      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(date).toISOString(),
      }
    })
    .filter(Boolean) as { url: string; lastModified: string }[]

  const today = new Date().toISOString()

  const routes = ["", "/blog", "/about"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: today,
  }))

  return [...routes, ...blogs]
}

