import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    image: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    liveUrl: z.string().optional(),
    sourceUrl: z.string().optional(),
    status: z.enum(['idea', 'in-progress', 'complete']).default('complete'),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['tutorials', 'cloud', 'system-design', 'devops', 'robotics', 'general']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    summary: z.string().optional(),
    image: z.string().optional(),
  }),
});

const papers = defineCollection({
  loader: glob({ base: './src/content/papers', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    url: z.string().url().optional(),
    summary: z.string(),
    takeaways: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    dateRead: z.coerce.date(),
  }),
});

export const collections = { news, projects, blog, papers };
