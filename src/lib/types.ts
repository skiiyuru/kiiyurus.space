import type { CollectionEntry, InferEntrySchema } from 'astro:content'

export type AboutSection = InferEntrySchema<'about_sections'>
export type Tools = CollectionEntry<'tools'>[]

export interface AboutSectionsProps {
  sections: CollectionEntry<'about_sections'>[]
  tools: Tools
}
