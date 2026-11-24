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

const garage = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/garage',
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        manufacturer: z.string(),
        model: z.string(),
        year: z.number(),
        generation: z.string().optional(),
        publishDate: z.coerce.date(),
        featured: z.boolean().default(false),
        heroImage: z.string(),
        engine: z.string().optional(),
        power: z.string().optional(),
        transmission: z.string().optional(),
        drivetrain: z.string().optional(),
    }),
});

export const collections = { news, articles, garage };