import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const categories = ['data-analytics', 'data-science', 'machine-learning'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(categories),
      secondaryCategory: z.enum(categories).optional(),
      tools: z.array(z.string()),
      status: z.enum(['completed', 'in-progress']).default('completed'),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      date: z.coerce.date().optional(),
      thumbnail: image().optional(),
      thumbnailAlt: z.string().optional(),
      githubUrl: z.string().url().optional(),
      notebookUrl: z.string().url().optional(),
      dashboardUrl: z.string().url().optional(),
      metrics: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .default([]),
    }),
});

export const collections = { projects };