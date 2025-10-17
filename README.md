# Usable Docs

📚 **Automated documentation site for Usable** - Built with
[Astro Starlight](https://starlight.astro.build/)

This repository contains the source code for the Usable documentation site,
which is automatically generated from Memory Fragments in the Usable Public
workspace.

## 🚀 Features

- **Automated Documentation Pipeline** - Fragments automatically sync to docs
  via N8N webhooks
- **Orlando Design System** - Follows Orlando's accessibility-first,
  vanilla-focused principles
- **Smart Search** - Built-in search powered by Pagefind
- **Dark Mode** - Automatic theme switching
- **Mobile Responsive** - Optimized for all devices
- **SEO Optimized** - Meta tags, sitemap, and robots.txt
- **Fast Performance** - Static site generation for speed

## 🏗️ Project Structure

```
usable-docs/
├── src/
│   ├── content/
│   │   └── docs/              # Documentation content
│   │       ├── getting-started/
│   │       ├── guides/
│   │       ├── tutorials/
│   │       ├── troubleshooting/
│   │       └── reference/
│   ├── components/            # Custom Astro components
│   │   ├── Head.astro
│   │   ├── Badge.astro
│   │   └── FragmentSource.astro
│   ├── styles/
│   │   └── custom.css         # Orlando-inspired styles
│   └── assets/
│       └── usable-logo.png
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs           # Astro configuration
├── package.json
└── README.md
```

## 🛠️ Local Development

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/flowcore-io/usable-docs.git
cd usable-docs

# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at `http://localhost:4321`

### Development Commands

| Command           | Action                               |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview production build locally     |
| `npm run format`  | Format code with Biome               |
| `npm run lint`    | Lint code with Biome                 |
| `npm run check`   | Check formatting and linting         |
| `npm run astro`   | Run Astro CLI commands               |

## 📝 Creating Content

### Manual Content Creation

Create a new Markdown file in the appropriate directory:

```markdown
---
title: Your Page Title
description: Brief description for SEO
---

# Your Page Title

Your content here in Markdown format.

## Code Examples

\`\`\`typescript const example = "Hello World"; \`\`\`

## Callouts

:::note This is a note callout :::

:::tip This is a tip callout :::
```

### Automated Content (N8N Integration)

Content is automatically generated when fragments are created in Usable Public
workspace with these tags:

```markdown
category:getting-started # Maps to /getting-started/ category:guides # Maps to
/guides/ subcategory:authentication # Creates /guides/authentication/
status:published # Required for auto-sync
```

Example:

- Tags: `["category:guides", "subcategory:mcp", "status:published"]`
- Result: `/guides/mcp/your-fragment-title.md`

## 🎨 Orlando Design System

This project follows Orlando's design principles:

### ✅ Principles Applied

- **Accessibility First** - WCAG 2.1 AA+ compliance
- **Theme-Based** - CSS custom properties for theming
- **BEM Methodology** - Component class naming
- **Mobile-First** - Responsive design approach
- **Performance Conscious** - Optimized Core Web Vitals

### Custom Components

#### Badge Component

```astro
<Badge type="new" />
<Badge type="updated" />
<Badge type="experimental" />
<Badge type="deprecated" />
```

#### Fragment Source Component

```astro
<FragmentSource 
  fragmentId="abc-123"
  workspaceId="xyz-789"
  fragmentType="Recipe"
  updatedAt="2025-10-17T12:00:00Z"
/>
```

## 🚢 Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages on every push to `main` using the
**official Astro GitHub Action**:

1. GitHub Actions runs the build with `withastro/action@v3`
2. Astro generates static files
3. GitHub Pages publishes the site
4. Available at `https://flowcore-io.github.io/usable-docs`

### Setup GitHub Pages

**One-time setup:**

1. Go to your repository **Settings**
2. Navigate to **Pages** (under Code and automation)
3. Set **Source** to "**GitHub Actions**"
4. Push to `main` branch to trigger deployment

That's it! The workflow will automatically handle everything else.

### Custom Domain (Optional)

To use a custom domain like `docs.usable.dev`:

1. Update `astro.config.mjs`:

   ```js
   export default defineConfig({
     site: "https://docs.usable.dev",
     // Remove or comment out the base property
   });
   ```

2. Add a `CNAME` file to the `public/` directory:

   ```
   docs.usable.dev
   ```

3. Configure DNS at your domain provider:
   - Add a CNAME record pointing to `flowcore-io.github.io`

4. Enable custom domain in GitHub Pages settings

## 🔧 Configuration

### Astro Config

Edit `astro.config.mjs` to customize:

- Site URL
- Social links
- Sidebar structure
- Custom CSS
- SEO settings

### Custom Styling

Add custom styles in `src/styles/custom.css`:

```css
:root {
  /* Custom theme variables */
  --usable-brand-primary: #6366f1;
}

/* Custom component styles */
.my-component {
  /* Styles here */
}
```

## 📊 Analytics

Analytics integration placeholder in `src/components/Head.astro`:

```html
<!-- Add Plausible or similar privacy-friendly analytics -->
<script
  defer
  data-domain="docs.usable.dev"
  src="https://plausible.io/js/script.js"
></script>
```

## 🤝 Contributing

### Guidelines

1. **Follow Orlando principles** - Accessibility, performance, simplicity
2. **Write clear documentation** - Be concise and helpful
3. **Test locally** - Run `npm run build` before committing
4. **Keep fragments focused** - One concept per page

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build locally
5. Submit a pull request
6. Wait for CI checks to pass

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for
details.

## 🔗 Links

- **Live Site**: [docs.usable.dev](https://docs.usable.dev)
- **Usable App**: [app.usable.dev](https://app.usable.dev)
- **Main Repo**:
  [github.com/flowcore-io/usable](https://github.com/flowcore-io/usable)
- **Astro Starlight**: [starlight.astro.build](https://starlight.astro.build)

## 💬 Support

- **Discord**: [discord.gg/usable](https://discord.gg/usable)
- **Email**: support@usable.dev
- **GitHub Issues**:
  [github.com/flowcore-io/usable-docs/issues](https://github.com/flowcore-io/usable-docs/issues)

---

**Built with ❤️ by the Flowcore team**
