---
title: "N8N Workflow Plan - Usable Docs Automation"
description: "Complete implementation plan for automating fragment-to-docs synchronization using N8N with webhook setup, GitHub integration, and path generation logic."
fragmentId: "223079ff-8660-4d98-b2be-f1e65e33555f"
fragmentType: "Recipe"
createdBy: "9e9de400-5b61-48a8-90dc-5edc9a959089"
createdAt: "2025-10-22T15:25:26.373Z"
updatedAt: "2025-10-22T15:25:26.373Z"
badges: ["new"]
---

Complete implementation plan for automating fragment-to-docs synchronization using N8N.

## Overview

**Goal**: Automatically sync published Usable fragments to the docs site via git commits.

**Trigger**: Webhook from Usable (fragment created, updated, or deleted)  
**Result**: Markdown file committed to `usable-docs` repo → GitHub Actions deploys

## Workflow Steps

```
[1] Webhook Trigger → [2] Filter Fragments → [3] Parse Details → [4] Switch Operation → [5a/5b] GitHub Operation → [6] Success Response
```

## Quick Start

1. **Create GitHub Token** at https://github.com/settings/tokens with `repo` scope
2. **Add to N8N** as GitHub credential
3. **Configure 5 nodes**: Webhook, Filter, Parse, Switch, GitHub operations
4. **Test** with sample fragment

## Key Features

- ✅ Simple path regeneration for all operations
- ✅ No registry needed - path calculated on-the-fly
- ✅ 5 nodes total - clean and maintainable
- ✅ GitHub API handles authentication and retries

For full implementation details, see the complete N8N_WORKFLOW_PLAN.md file.