export default function setNewURLParams({
  url,
  key,
  valueArray,
}: {
  url: URL
  key: string
  valueArray: string[]
}) {
  const params = url.searchParams

  if (valueArray.length === 0) {
    params.delete(key)
    url.search = params.toString()
    return url
  }

  params.set(key, valueArray.join(','))
  url.search = params.toString()
  return url
}
