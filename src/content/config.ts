import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    summary: z.string().optional(),
    githublink: z.string().url().optional(),
    techstack: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
    projects,
  };
  
