import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.string(), // YYYY-MM-DD
    author: z.string(), // Nome do autor
    category: z.enum([
      // Tricologia & Capilar
      'Tricologia',
      'Diagnóstico capilar',
      'Queda capilar',
      'Alopecia',
      'Inflamações do couro cabeludo',

      // Saúde Integrativa
      'Nutrição capilar',
      'Hormônios',
      'Sono & Recuperação',
      'Estresse & Capilar',
      'Microbioma',

      // Clínica & Pesquisa
      'Casos clínicos',
      'Pesquisa',
      'Procedimentos',
      'Genética capilar',

      // Lifestyle & Educação
      'Educação do paciente',
      'Lifestyle',
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false), // Para destaque na home
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
