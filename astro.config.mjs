import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://flowcore-io.github.io',
  base: '/usable-docs',
  integrations: [
    starlight({
      title: 'Usable Docs',
      description: 'Documentation and knowledge base for Usable - AI-powered long-term memory for your codebase',
      logo: {
        src: './src/assets/usable-logo.png',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/flowcore-io/usable-docs',
      },
      editLink: {
        baseUrl: 'https://github.com/flowcore-io/usable-docs/edit/main/',
      },
      sidebar: [
        {
          label: 'Knowledge',
          autogenerate: { directory: 'knowledge' },
        },
        {
          label: 'Recipe',
          autogenerate: { directory: 'recipe' },
        },
        {
          label: 'Solution',
          autogenerate: { directory: 'solution' },
        },
        {
          label: 'Template',
          autogenerate: { directory: 'template' },
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        Head: './src/components/Head.astro',
      },
      pagefind: true,
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
      },
      lastUpdated: true,
      favicon: '/favicon.svg',
    }),
  ],
});

