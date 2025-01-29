import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_o2qqU0bG.mjs';
import 'es-module-lexer';
import { k as decodeKey } from './chunks/astro/server_B9k6C6bM.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.7qqag-5g.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.7qqag-5g.js"}],"styles":[{"type":"external","src":"/_astro/_page_.B6AtQ5Ur.css"},{"type":"inline","content":"h2[data-astro-cid-aid3sr62]{margin-bottom:1rem}@media (min-width: 640px){section[data-astro-cid-aid3sr62]{grid-template-columns:subgrid;grid-column:span 2}h2[data-astro-cid-aid3sr62],p[data-astro-cid-aid3sr62],#filter-wrapper[data-astro-cid-aid3sr62]{grid-column:span 2}#cards-wrapper[data-astro-cid-aid3sr62]{grid-template-columns:subgrid;grid-auto-flow:row;grid-column:span 2}#title-wrapper[data-astro-cid-aid3sr62]{grid-column:span 2}}@media (min-width: 768px){section[data-astro-cid-aid3sr62]{padding-left:2rem;padding-right:2rem}#cards-wrapper[data-astro-cid-aid3sr62]{grid-template-columns:repeat(3,1fr)}}@media (min-width: 1024px){section[data-astro-cid-aid3sr62]{grid-template-columns:subgrid;grid-column:span 6}#title-wrapper[data-astro-cid-aid3sr62],#filter-wrapper[data-astro-cid-aid3sr62],#cards-wrapper[data-astro-cid-aid3sr62]{grid-column:span 6}#cards-wrapper[data-astro-cid-aid3sr62] #card[data-astro-cid-aid3sr62].featured{grid-column:span 2;grid-row:span 2}}\n@media (min-width: 1024px){article[data-astro-cid-t45dg4vu]{container-name:card;container-type:inline-size}@container card (min-width: 500px){article[data-astro-cid-t45dg4vu].featured p[data-astro-cid-t45dg4vu]{display:block}}}\n"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.7qqag-5g.js"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://kiiyurus.space","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/pages/blog/[id].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/components/home/ProjectSection.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/components/ui/ProjectCard.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[id]@_@astro":"pages/blog/_id_.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_zPxSEvYc.mjs","C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BmO4MKMj.mjs","C:\\Users\\St3vA\\LevelUp\\Engineer\\kiiyurus.space\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\St3vA\\LevelUp\\Engineer\\kiiyurus.space\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BIqGQq34.mjs","@/components/home/Experience":"_astro/Experience.Dzv9_8h-.js","@astrojs/react/client.js":"_astro/client.CiiykCno.js","C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/pages/projects.astro?astro&type=script&index=0&lang.ts":"_astro/projects.astro_astro_type_script_index_0_lang.wbApKbKP.js","C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.Baw_JnMB.js","astro:scripts/page.js":"_astro/page.7qqag-5g.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/pages/projects.astro?astro&type=script&index=0&lang.ts","function c(t,r){const e=t.searchParams.get(r);return e?e.split(\",\"):[]}function i({url:t,key:r,valueArray:e}){const s=t.searchParams;return e.length===0?(s.delete(r),t.search=s.toString(),t):(s.set(r,e.join(\",\")),t.search=s.toString(),t)}const l=document.querySelectorAll(\"[data-tool]\"),d=document.querySelector(\"#clear-all\");d?.addEventListener(\"click\",()=>{window.location.href=\"projects\"});l.forEach(t=>t.addEventListener(\"click\",()=>{const r=t.getAttribute(\"aria-pressed\")===\"true\";t.setAttribute(\"aria-pressed\",r?\"false\":\"true\");const e=new URL(window.location.href),s=c(e,\"tools\"),a=r?s.filter(o=>o!==t.dataset.tool):[...s,t.dataset.tool],n=i({url:e,key:\"tools\",valueArray:a});window.location.assign(n.toString())}));"],["C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/components/Footer.astro?astro&type=script&index=0&lang.ts","const t=document.querySelector(\"#copyright\");t.textContent=new Date().getFullYear().toString();"]],"assets":["/_astro/pixelify-sans-latin-wght-normal.vdc2vUDH.woff2","/_astro/big-shoulders-text-latin-wght-normal.8SQoz8Ac.woff2","/_astro/big-shoulders-text-latin-ext-wght-normal.WZ7SSXR9.woff2","/_astro/pixelify-sans-latin-ext-wght-normal.DEDzhmUG.woff2","/_astro/big-shoulders-text-vietnamese-wght-normal.BzMM9f95.woff2","/_astro/pixelify-sans-cyrillic-wght-normal.CPPz0Qvd.woff2","/_astro/_page_.B6AtQ5Ur.css","/favicon.svg","/memory-cube.svg","/model/baked.jpg","/model/portal.glb","/_astro/client.CiiykCno.js","/_astro/Experience.Dzv9_8h-.js","/_astro/index.5vR-3Izp.js","/_astro/page.7qqag-5g.js","/rss/styles.xsl","/_astro/page.7qqag-5g.js","/404.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"1k418HbAbDtrX38qJR9cadF5Gg80gAlwvJdlB/AGMrQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
