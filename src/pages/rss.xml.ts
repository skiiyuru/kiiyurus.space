import { baseData } from "@/data/siteData"
import rss from "@astrojs/rss"
import type { APIContext, APIRoute } from "astro"
import { getCollection } from "astro:content"

export async function GET(context) {
  const blog = await getCollection("posts")

  return rss({
    title: baseData.title,
    description: baseData.description,
    site: context.site,
    items: blog.map((b) => ({
      title: b.data.title,
      pubDate: b.data.pubDate,
      description: b.data.description,
      link: `/blog/${b.id}`,
    })),
    customData: `<language>en-us</language>`,
    stylesheet: "rss/styles.xsl",
  })
}
