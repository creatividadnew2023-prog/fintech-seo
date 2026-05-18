import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviewsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/reviews" }),
  schema: z.object({
    name: z.string(),
    rating: z.string(),
    verdict: z.string(),
    logo: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    fees: z.string(),
    affiliateLink: z.string(),
    bonus: z.string(),
    language: z.enum(['en', 'es']),
    seoTitle: z.string(),
  })
});

export const collections = {
  reviews: reviewsCollection,
};
