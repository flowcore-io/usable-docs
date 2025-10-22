---
title: "What is a Fragment Type"
description: "Comprehensive documentation explaining fragment types: purpose, standard types, when to use each, and decision frameworks."
fragmentId: "a5409f44-97f1-43e1-87ba-ec62ae670fdf"
fragmentType: "Knowledge"
createdBy: "unknown"
createdAt: "2025-10-22T13:48:56.648Z"
updatedAt: "2025-10-22T13:48:56.266Z"
badges: []
---

A **Fragment Type** is a classification system that helps organize and categorize knowledge fragments within Usable workspaces. Fragment types provide semantic meaning to your content, making it easier to find, filter, and understand the purpose of each piece of information.

---

## 🎯 Purpose

Fragment types serve several key purposes:

- **Organization**: Categorize knowledge by its nature and intended use
- **Discoverability**: Enable filtering and searching by content type
- **Context**: Provide immediate visual and semantic cues about a fragment's purpose
- **Workflow**: Support different workflows based on content type (e.g., troubleshooting vs. learning)
- **Customization**: Allow workspaces to define custom types for domain-specific needs

---

## 📚 Standard Fragment Types

Usable provides five default fragment types that cover most common use cases:

### 1. **Knowledge** 
**Icon**: 🧠 Brain  
**Color**: Blue  
**Purpose**: General information, documentation, and reference material  

**When to use**:
- Conceptual explanations ("What is X?")
- Background information and context
- Documentation and guides
- Definitions and glossaries
- Reference material

**Examples**:
- "What is a Usable Workspace"
- "Understanding OAuth 2.0"
- "Company coding standards"
- Technical specifications

---

### 2. **Recipe** 
**Icon**: 👨‍🍳 Chef Hat  
**Color**: Green  
**Purpose**: Step-by-step guides, tutorials, and procedures  

**When to use**:
- Tutorial content with sequential steps
- "How to" guides for humans
- Onboarding procedures
- Setup instructions
- Workflows and processes

**Examples**:
- "How to Create a Workspace"
- "Setting up a React development environment"
- "Onboarding new team members"
- "Publishing a blog post workflow"

**Key difference from Instruction Set**: Recipes are written for **humans** to follow, while Instruction Sets are for **LLMs** to execute.

---

### 3. **Solution** 
**Icon**: 💡 Lightbulb  
**Color**: Yellow  
**Purpose**: Solutions to specific problems and troubleshooting guides  

**When to use**:
- Bug fixes and resolutions
- Troubleshooting guides
- Problem-solution pairs
- Postmortems and incident reports
- Workarounds and patches

**Examples**:
- "Fixing CORS errors in Next.js API routes"
- "Resolving database connection timeout issues"
- "Ticket #123 resolution: Critical bug in checkout flow"
- "Workaround for Safari rendering issue"

**Why this matters**: Solutions turn resolved problems into searchable knowledge, preventing teams from solving the same issue multiple times.

---

### 4. **Template** 
**Icon**: 📄 File Type  
**Color**: Purple  
**Purpose**: Reusable code patterns, project templates, and boilerplates  

**When to use**:
- Code snippets and patterns
- Project scaffolding templates
- Configuration file templates
- Reusable prompts
- Boilerplate code

**Examples**:
- "React component template with TypeScript"
- "API endpoint boilerplate"
- "Docs capture prompts for livestreams"
- "Docker compose configuration template"

---

### 5. **Instruction Set** 
**Icon**: ✅ List Checks  
**Color**: Orange  
**Purpose**: Automated workflows and instructions for LLMs to execute  

**When to use**:
- Multi-step automation workflows
- LLM-executable procedures
- Automated setup scripts
- Repeatable automation patterns
- Agent workflows

**Examples**:
- "Setup new project with dependencies and configuration"
- "Generate weekly report from workspace data"
- "Create CRM entry from email automation"
- "Process and categorize incoming support tickets"

**Key difference from Recipe**: Instruction Sets are designed for **LLM execution**, while Recipes are for **human reading**.

---

## 🎨 Custom Fragment Types

Workspaces can define custom fragment types to match domain-specific needs. Examples from real implementations:

- **CRM**: Customer relationship entries
- **Time Entries**: Time tracking records
- **Projects**: Project management artifacts
- **Tickets**: Issue tracking and support requests
- **Content Briefs**: Content planning documents
- **Blog Posts**: Published or draft articles
- **Retrospectives**: Project retrospectives and lessons learned
- **Plan**: Strategic plans, roadmaps, and milestones
- **PRD**: Product requirements documents

---

## 🧭 Choosing the Right Fragment Type

Use this quick decision tree:

```
Is it executable by an LLM?
├─ Yes → Instruction Set
└─ No → Is it solving a specific problem?
    ├─ Yes → Solution
    └─ No → Is it step-by-step instructions for humans?
        ├─ Yes → Recipe
        └─ No → Is it reusable code or patterns?
            ├─ Yes → Template
            └─ No → Knowledge
```

**Simple picker**:
- "How to…" for humans → **Recipe**
- "Fix…" or "Resolve…" → **Solution**
- "What is…" or "Understanding…" → **Knowledge**
- Reusable code/patterns → **Template**
- LLM should execute → **Instruction Set**
- Strategic planning → **Plan** (if custom type exists)
- Feature requirements → **PRD** (if custom type exists)

---

## 🔗 Related Concepts

- **What is a Fragment**: Understanding the atomic unit of knowledge in Usable
- **What is a Usable Workspace**: How workspaces organize and scope fragments
- **Creating a Workspace**: Getting started with your first workspace
- **Tagging Strategy**: How tags complement fragment types for organization

---

## 💡 Why This Matters

Fragment types transform an unstructured collection of notes into an organized knowledge system:

- **Faster Discovery**: Filter by type to find exactly what you need
- **Clear Intent**: Understand a fragment's purpose at a glance
- **Better AI Results**: LLMs can better understand and retrieve relevant content
- **Workflow Support**: Different types enable different workflows (learning vs. troubleshooting)
- **Scalability**: As your workspace grows, types keep it navigable
- **Knowledge Compounding**: Properly typed content builds on itself over time

---

## 📊 Fragment Types in Practice

From the **Clarity case study** (Usable Live Week 41), a complete business platform used these fragment types:

- **CRM entries** → Custom CRM type
- **Time tracking** → Custom Time Entries type
- **Project plans** → Custom Projects type
- **Support tickets** → Custom Tickets type
- **Content planning** → Custom Content Briefs type
- **Published content** → Custom Blog Posts type
- **Lessons learned** → Custom Retrospectives type

This demonstrates how **fragment types scale** from personal knowledge management to complete business systems.

---

**Sources**: Compiled from Usable Live sessions (Oct 2025), particularly the "Docs From Context" session and Week 41 Clarity case study.
