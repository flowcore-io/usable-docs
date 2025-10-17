# Contributing to Usable Docs

Thank you for your interest in contributing to Usable Docs! This document
provides guidelines and information for contributors.

## 🎯 Ways to Contribute

1. **Documentation Improvements** - Fix typos, clarify instructions, add
   examples
2. **New Guides & Tutorials** - Share your knowledge and best practices
3. **Bug Reports** - Report issues with the docs site or content
4. **Design Improvements** - Enhance the visual design following Orlando
   principles
5. **Code Contributions** - Improve site functionality and performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git
- A Usable account (for testing integrations)

### Setup Development Environment

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/usable-docs.git
cd usable-docs

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your changes live.

## 📝 Content Guidelines

### Writing Style

- **Be Clear & Concise** - Get to the point quickly
- **Use Active Voice** - "Click the button" not "The button should be clicked"
- **Provide Context** - Explain why, not just how
- **Include Examples** - Show code examples and screenshots
- **Be Inclusive** - Use gender-neutral language

### Markdown Formatting

Use consistent Markdown formatting:

```markdown
# Page Title (H1 - only one per page)

## Section Heading (H2)

### Subsection Heading (H3)

**Bold for emphasis** _Italic for technical terms_ `code` for inline code
\`\`\`language for code blocks

:::note Callout for important information :::
```

### Code Examples

- **Include Language Tags** - Always specify language for syntax highlighting
- **Test Your Code** - Ensure examples actually work
- **Keep Examples Short** - Focus on the relevant parts
- **Add Comments** - Explain complex logic

```typescript
// ✅ Good example
const client = new UsableClient({
  apiKey: process.env.USABLE_API_KEY, // Never hardcode keys!
});

// ❌ Bad example
const c = new UsableClient({ apiKey: "abc123" });
```

### File Organization

Place content in the appropriate directory:

- `/getting-started/` - Installation, quickstart, introduction
- `/guides/` - Step-by-step how-to guides
- `/tutorials/` - Longer form educational content
- `/troubleshooting/` - Problem-solving and debugging
- `/reference/` - API docs, technical specifications

### Frontmatter

Every Markdown file should include frontmatter:

```markdown
---
title: Your Page Title
description: Brief description for SEO (max 160 chars)
---
```

## 🎨 Orlando Design System

Follow Orlando's design principles:

### Accessibility First

- Use semantic HTML
- Include alt text for images
- Ensure sufficient color contrast
- Test with keyboard navigation
- Support screen readers

### CSS Guidelines

- Use BEM methodology for custom components
- Leverage CSS custom properties for theming
- Support both light and dark modes
- Keep CSS modular and maintainable

Example:

```css
/* Block */
.fragment-card {
  /* Base styles */
}

/* Element */
.fragment-card__title {
  /* Title styles */
}

/* Modifier */
.fragment-card--highlighted {
  /* Highlighted variant */
}
```

### Performance

- Optimize images (use SVG when possible)
- Minimize custom JavaScript
- Keep bundle sizes small
- Test on mobile devices

## 🔧 Development Workflow

### Branch Naming

Use descriptive branch names:

- `docs/improve-api-reference` - Documentation updates
- `feature/add-search-filters` - New features
- `fix/broken-link-404` - Bug fixes
- `style/orlando-badge-colors` - Design improvements

### Commit Messages

Follow conventional commits:

```
docs: add MCP integration examples
feat: implement custom badge component
fix: correct broken links in guides
style: apply Orlando focus styles
```

### Pull Request Process

1. **Fork the Repository** - Create your own fork
2. **Create a Branch** - Use a descriptive name
3. **Make Changes** - Follow our guidelines
4. **Test Locally** - Run `npm run build` successfully
5. **Commit Changes** - Use clear commit messages
6. **Push to Fork** - Push your branch
7. **Open PR** - Create a pull request with description
8. **Address Feedback** - Respond to review comments
9. **Merge** - Maintainers will merge when approved

### Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Documentation update
- [ ] New feature
- [ ] Bug fix
- [ ] Design improvement

## Checklist

- [ ] Tested locally
- [ ] Follows Orlando principles
- [ ] No linter errors
- [ ] Updated relevant docs
```

## 🧪 Testing

### Before Submitting

```bash
# Check for build errors
npm run build

# Run Astro check
npm run astro check

# Preview production build
npm run preview
```

### Test Checklist

- [ ] All links work (no 404s)
- [ ] Images load correctly
- [ ] Code examples are accurate
- [ ] Search finds new content
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] Keyboard navigation works

## 📋 Review Process

### What We Look For

1. **Quality** - Well-written, accurate content
2. **Consistency** - Matches existing style and tone
3. **Completeness** - Includes all necessary information
4. **Testing** - Changes have been tested locally
5. **Orlando Compliance** - Follows design principles

### Response Time

We aim to review PRs within:

- **Documentation fixes** - 1-2 business days
- **New content** - 3-5 business days
- **Code changes** - 5-7 business days

## 🤝 Community

### Communication Channels

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - Questions and general discussion
- **Discord** - Real-time chat with the community
- **Email** - support@usable.dev for private inquiries

### Code of Conduct

We are committed to providing a welcoming and inclusive environment:

- **Be Respectful** - Treat everyone with respect
- **Be Constructive** - Provide helpful feedback
- **Be Patient** - Remember we're all volunteers
- **Be Inclusive** - Welcome newcomers
- **No Harassment** - Zero tolerance policy

## 📜 License

By contributing, you agree that your contributions will be licensed under the
MIT License.

## ❓ Questions?

Not sure about something? Ask!

- Open a GitHub Discussion
- Join our Discord
- Email support@usable.dev

We're here to help! 💙

---

**Thank you for contributing to Usable Docs!**
