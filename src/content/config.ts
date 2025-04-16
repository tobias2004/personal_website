import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    githublink: z.string().optional(),
    techstack: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  projects,
};