import { defineCollection, z } from 'astro:content';

const reviewsCollection = defineCollection({
  type: 'content', // Permite usar archivos Markdown (donde n8n escribirá el texto largo)
  schema: z.object({
    name: z.string(),
    rating: z.string(),
    verdict: z.string(),
    logo: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    fees: z.string(),
    affiliateLink: z.string().url(),
    bonus: z.string(),
    language: z.enum(['en', 'es']),
    seoTitle: z.string(),
  })
});

// Exportamos las colecciones para que Astro las reconozca
export const collections = {
  'reviews': reviewsCollection,
};
