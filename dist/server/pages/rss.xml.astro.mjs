import { b as baseData } from '../chunks/siteData_CYaQy5Ia.mjs';
import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_wnJfiSt3.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const blog = await getCollection("posts");
  return rss({
    title: baseData.title,
    description: baseData.description,
    site: context.site,
    items: blog.map((b) => ({
      title: b.data.title,
      pubDate: b.data.pubDate,
      description: b.data.description,
      link: `/blog/${b.id}`
    })),
    customData: `<language>en-us</language>`,
    stylesheet: "rss/styles.xsl"
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
