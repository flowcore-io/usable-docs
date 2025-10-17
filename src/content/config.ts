import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// Define the docs collection using Starlight's schema
export const collections = {
  docs: defineCollection({ 
    schema: docsSchema({
      extend: z.object({
        // Custom frontmatter fields for N8N automation
        fragmentId: z.string().optional(),
        fragmentType: z.string().optional(),
        badges: z.array(z.string()).optional(),
        workspaceId: z.string().optional(),
      }),
    }),
  }),
};

