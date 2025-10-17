import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://flowcore-io.github.io',
  // Uncomment and set if deploying to a repository path (e.g., /usable-docs)
  // base: '/usable-docs',
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
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Tutorials',
          autogenerate: { directory: 'tutorials' },
        },
        {
          label: 'Troubleshooting',
          autogenerate: { directory: 'troubleshooting' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
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

