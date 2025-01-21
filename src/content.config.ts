import { glob } from "astro/loaders"
import { defineCollection, reference, z } from "astro:content"

const features = defineCollection({
  loader: glob({ pattern: "**/[^_]*.yaml", base: "./src/content/features" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
})

const tools = defineCollection({
  loader: glob({ pattern: "**/[^_]*.yaml", base: "./src/content/tools" }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
  }),
})

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.yaml", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      icons: z.array(reference("tools")),
      url: z.string().url(),
      thumbnail: z.string().url(),
    }),
})

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(65, {
        message: "Title cannot be longer than 65 characters",
      }),
      description: z.string().max(165, {
        message: "Description cannot be longer than 165 characters",
      }),
      image: z.string().url(),
      pubDate: z.date(),
      isDraft: z.boolean().optional(),
    }),
})

export const collections = {
  features,
  tools,
  projects,
  posts,
}
