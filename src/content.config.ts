import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/news',
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        author: z.string().optional(),
        featured: z.boolean().default(false),
        heroImage: z.string().optional(),
    }),
});

const articles = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/articles',
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.coerce.date(),
        author: z.string().optional(),
        featured: z.boolean().default(false),
        heroImage: z.string().optional(),
    }),
});

export const collections = { news, articles };