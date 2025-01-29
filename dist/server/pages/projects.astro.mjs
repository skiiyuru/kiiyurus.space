/* empty css                                  */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, e as renderSlot, a as renderComponent, f as renderScript } from '../chunks/astro/server_B9k6C6bM.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_wnJfiSt3.mjs';
import { a as $$Icon, $ as $$BaseLayout } from '../chunks/BaseLayout_VpIvfKSR.mjs';
import { $ as $$ProjectCard } from '../chunks/ProjectCard_BU5zfQv1.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://kiiyurus.space");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Badge;
  const { pressed, ...otherProps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button aria-label="Remove"${addAttribute([
    "relative inline-block border-2 border-white px-2 py-1 text-base font-medium hover:border-zinc-500 hover:text-zinc-500",
    pressed && "bg-white text-zinc-950 tracking-wider"
  ], "class:list")}${spreadAttributes(otherProps)}> ${renderSlot($$result, $$slots["default"])} ${pressed && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "close", "aria-hidden": "true", "class": "size-5 bg-white text-zinc-950 border border-zinc-950 absolute top-0 right-0 inline-flex items-center justify-center p-1 text-sm transform translate-x-1/2 -translate-y-1/2" })}`} </button>`;
}, "C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/components/ui/Badge.astro", undefined);

function getSearchParamAsArray(url, key) {
  const params = url.searchParams.get(key);
  if (!params) {
    return [];
  }
  return params.split(",");
}

const $$Astro = createAstro("https://kiiyurus.space");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  let projects = await getCollection("projects");
  projects = projects.sort(
    (a, b) => Number(b.data.isFeatured) - Number(a.data.isFeatured)
  );
  const allTools = await getCollection("tools");
  const filters = getSearchParamAsArray(Astro2.url, "tools");
  if (filters.length > 0) {
    projects = projects.filter((project) => {
      const tools = project.data.icons.map((icon) => icon.id);
      return filters.some((filter) => tools.includes(filter));
    });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Stephen Kiiyuru's Projects", "description": "Here are some recent projects I've done", "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 grid gap-14 bg-zinc-900 py-10" data-astro-cid-aid3sr62> <div id="title-wrapper" data-astro-cid-aid3sr62> <h2 class="text-4xl lg:text-5xl font-display tracking-wider
      text-center
      text-pretty" data-astro-cid-aid3sr62>
Fancy a look?
</h2> <p class="text-center" data-astro-cid-aid3sr62>
Every pixel, every line of code—it all comes to life here. Explore the
        creations that push boundaries and reimagine what's possible.
</p> </div> <div id="filter-wrapper" class="grid gap-4" data-astro-cid-aid3sr62> <div class="flex gap-4 items-center" data-astro-cid-aid3sr62> <p class="font-bold" data-astro-cid-aid3sr62>FILTER BY TECH</p> <div class="flex gap-4 flex-wrap items-center" data-astro-cid-aid3sr62> ${filters.length > 0 && renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "id": "clear-all", "pressed": true, "aria-pressed": "true", "data-astro-cid-aid3sr62": true }, { "default": ($$result3) => renderTemplate`
Clear All
` })}`} </div> </div> <ul class="flex gap-4 flex-wrap items-center" data-astro-cid-aid3sr62> ${allTools.map(({ data, id }) => {
    const isPressed = filters.includes(id);
    return renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "data-tool": id, "aria-pressed": isPressed ? "true" : "false", "pressed": isPressed, "data-astro-cid-aid3sr62": true }, { "default": ($$result3) => renderTemplate`${data.title}` })}`;
  })} </ul> </div> <div id="cards-wrapper" class="grid gap-6 items-center" data-astro-cid-aid3sr62> ${projects.map(({ data }) => renderTemplate`<div id="card"${addAttribute(`${data.isFeatured ? "featured" : ""}`, "class")} data-astro-cid-aid3sr62> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "data": data, "data-astro-cid-aid3sr62": true })} </div>`)} </div> </section> ` })} ${renderScript($$result, "C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/pages/projects.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/pages/projects.astro", undefined);

const $$file = "C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
