import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_B9k6C6bM.mjs';
import 'kleur/colors';
import { a as $$Icon } from './BaseLayout_VpIvfKSR.mjs';
import { a as getEntries } from './_astro_content_wnJfiSt3.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_CIFcbriB.mjs';
/* empty css                         */

const $$Astro = createAstro("https://kiiyurus.space");
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { data } = Astro2.props;
  const { title, url, icons, thumbnail, isFeatured } = data;
  const iconData = await getEntries(icons);
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(title, "aria-label")}${addAttribute(`group ${isFeatured ? "featured" : ""}`, "class")} data-astro-cid-t45dg4vu> <a${addAttribute(url, "href")} data-astro-cid-t45dg4vu> ${renderComponent($$result, "Image", $$Image, { "src": thumbnail, "class": " transition-all ease-in duration-300 grayscale group-hover:grayscale-0", "alt": title, "format": "avif", "inferSize": true, "loading": "eager", "data-astro-cid-t45dg4vu": true })} <div class="grid grid-cols-3 items-center p-4 border border-t-0 text-start" data-astro-cid-t45dg4vu> <h3 class="col-span-2 text-2xl lg:text-3xl font-bold" data-astro-cid-t45dg4vu> ${title} </h3> <ul class="flex gap-2 justify-end col-span-1" data-astro-cid-t45dg4vu> ${iconData.map(({ data: data2 }) => renderTemplate`<li data-astro-cid-t45dg4vu> ${renderComponent($$result, "Icon", $$Icon, { "name": data2.icon, "title": data2.icon, "aria-label": data2.icon, "class": "size-5 lg:size-7", "data-astro-cid-t45dg4vu": true })} </li>`)} </ul> <p class="hidden" data-astro-cid-t45dg4vu>this is a long description</p> </div> </a> </article> `;
}, "C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/components/ui/ProjectCard.astro", undefined);

export { $$ProjectCard as $ };
