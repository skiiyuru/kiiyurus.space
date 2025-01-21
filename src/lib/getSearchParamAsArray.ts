import type { CollectionEntry } from "astro:content"

export default function getSearchParamAsArray(url: URL, key: string) {
  const params = url.searchParams.get(key)

  if (!params) {
    return []
  }

  return params.split(",") as CollectionEntry<"tools">["id"][]
}
