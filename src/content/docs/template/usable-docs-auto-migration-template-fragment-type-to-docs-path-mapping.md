---
title: "Usable Docs Auto-Migration Template - Fragment Type to Docs Path Mapping"
description: "Deterministic template for auto-migrating Usable fragments to docs site with flat directory structure."
fragmentId: "c4fe3e5a-0329-4c77-995c-5cccca9fa406"
fragmentType: "Template"
createdBy: "unknown"
createdAt: "2025-10-22T13:49:04.825Z"
updatedAt: "2025-10-22T13:49:04.512Z"
badges: []
---

Simple, deterministic template for automatically publishing Usable fragments to the docs site. **1:1 mapping** between Usable and docs for intuitive navigation.

## 🎯 Core Concept

**Fragment Type Name = Docs Directory Name**

No translation, no mapping - what you see in Usable is what you get in the docs.

## 📂 Fragment Type → Directory (1:1 Mapping)

| Fragment Type | Docs Directory | URL Path |
|--------------|----------------|----------|
| **Knowledge** | `/knowledge/` | `/knowledge/...` |
| **Recipe** | `/recipe/` | `/recipe/...` |
| **Solution** | `/solution/` | `/solution/...` |
| **Template** | `/template/` | `/template/...` |

## 🏷️ Required Tags

### Publish Control
```
status:published        # Must have to publish to docs
repo:usable-docs       # Associates with docs project
```

### Path Structure (using first non-system tag)
```
discord-bots           # First tag becomes subdirectory
```

**Or** use a dedicated slug tag for full control:
```
slug:discord-bots/build-your-first-bot
```

## 🔄 Path Generation Logic (N8N JS)

```javascript
// Simple 1:1 path generation
function generateDocsPath(fragment) {
  const { type, title, tags } = fragment;
  
  // 1. Check if should publish
  const shouldPublish = tags.includes('status:published') && 
                       tags.includes('repo:usable-docs');
  if (!shouldPublish) return null;
  
  // 2. Use fragment type name directly as directory
  const baseDir = type.toLowerCase(); // "Recipe" → "recipe"
  
  // 3. Extract slug or build from tags
  const slugTag = tags.find(t => t.startsWith('slug:'));
  let path;
  
  if (slugTag) {
    // Use explicit slug: "slug:discord-bots/build-bot"
    path = slugTag.replace('slug:', '');
  } else {
    // Build from first non-system tag + title
    const nonSystemTags = tags.filter(t => 
      !t.startsWith('status:') && 
      !t.startsWith('repo:') &&
      !t.startsWith('slug:') &&
      !['experimental', 'deprecated'].includes(t)
    );
    
    const subdirectory = nonSystemTags[0] || '';
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    path = subdirectory ? `${subdirectory}/${slug}` : slug;
  }
  
  // 4. Generate full file path
  return `src/content/docs/${baseDir}/${path}.md`;
}
```

## 📝 Examples

### Example 1: Recipe

**Fragment:**
- Type: **Recipe**
- Title: "How to Build a Discord Bot"
- Tags: `["discord-bots", "status:published", "repo:usable-docs"]`

**Generated Path:** `/recipe/discord-bots/how-to-build-a-discord-bot.md`
**URL:** `/recipe/discord-bots/how-to-build-a-discord-bot`

### Example 2: Knowledge

**Fragment:**
- Type: **Knowledge**  
- Title: "What is MCP?"
- Tags: `["mcp", "status:published", "repo:usable-docs"]`

**Generated Path:** `/knowledge/mcp/what-is-mcp.md`
**URL:** `/knowledge/mcp/what-is-mcp`

### Example 3: Solution

**Fragment:**
- Type: **Solution**
- Title: "Fix CORS Errors in Next.js"
- Tags: `["nextjs", "status:published", "repo:usable-docs"]`

**Generated Path:** `/solution/nextjs/fix-cors-errors-in-nextjs.md`
**URL:** `/solution/nextjs/fix-cors-errors-in-nextjs`

### Example 4: Template

**Fragment:**
- Type: **Template**
- Title: "React Authentication Hook"
- Tags: `["react", "status:published", "repo:usable-docs"]`

**Generated Path:** `/template/react/react-authentication-hook.md`
**URL:** `/template/react/react-authentication-hook`

### Example 5: Custom Slug

**Fragment:**
- Type: **Recipe**
- Title: "Complete MCP Setup Guide"
- Tags: `["slug:mcp/quickstart", "status:published", "repo:usable-docs"]`

**Generated Path:** `/recipe/mcp/quickstart.md`
**URL:** `/recipe/mcp/quickstart`

## 🎨 Badge Calculation

```javascript
function calculateBadges(fragment) {
  const badges = [];
  const { tags, createdAt, updatedAt } = fragment;
  
  // Manual badges from tags
  if (tags.includes('experimental')) badges.push('experimental');
  if (tags.includes('deprecated')) badges.push('deprecated');
  
  // Auto-calculated time-based badges
  const now = Date.now();
  const daysSinceCreation = (now - new Date(createdAt)) / (1000 * 60 * 60 * 24);
  const daysSinceUpdate = (now - new Date(updatedAt)) / (1000 * 60 * 60 * 24);
  
  if (daysSinceCreation <= 30) badges.push('new');
  if (daysSinceUpdate <= 7 && daysSinceCreation > 7) badges.push('updated');
  
  return badges;
}
```

## 📄 Frontmatter Generation

```javascript
function generateFrontmatter(fragment, badges) {
  return `---
title: "${fragment.title}"
description: "${fragment.summary || ''}"
fragmentId: "${fragment.id}"
fragmentType: "${fragment.type}"
author: "${fragment.author}"
createdAt: "${fragment.createdAt}"
updatedAt: "${fragment.updatedAt}"
badges: ${JSON.stringify(badges)}
---

${fragment.content}`;
}
```

## 📋 Quick Guide for Authors

### Minimum Required Tags
```json
["your-topic", "status:published", "repo:usable-docs"]
```

### Fragment Type = Directory
- Create a **Recipe** in Usable → appears in `/recipe/` in docs
- Create **Knowledge** in Usable → appears in `/knowledge/` in docs
- Create a **Solution** in Usable → appears in `/solution/` in docs
- Create a **Template** in Usable → appears in `/template/` in docs

**What you see in Usable is what you get in docs!**

## 🎯 Path Examples

**Recipe** + `["discord-bots"]` + "Build a Bot"  
→ `/recipe/discord-bots/build-a-bot.md`

**Knowledge** + `["mcp"]` + "What is MCP"  
→ `/knowledge/mcp/what-is-mcp.md`

**Solution** + `["nextjs"]` + "Fix CORS"  
→ `/solution/nextjs/fix-cors.md`

**Template** + `["react"]` + "Auth Hook"  
→ `/template/react/auth-hook.md`

## ✨ Benefits of 1:1 Mapping

✅ **Intuitive** - Same names everywhere  
✅ **No mental mapping** - Recipe in Usable = /recipe/ in docs  
✅ **Consistent experience** - Users don't get confused  
✅ **Simple code** - Just `type.toLowerCase()`  
✅ **Easy to explain** - "Fragment types become directories"

## 🚀 Astro Config Update

Update sidebar in `astro.config.mjs`:

```javascript
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
]
```

---

**1:1 mapping = zero mental overhead!** 🎯