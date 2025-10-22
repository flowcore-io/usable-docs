---
title: "Usable Live Sessions - Complete Documentation and Session Archive"
description: "Comprehensive documentation of Usable Live YouTube sessions covering integrations and real-world workflows."
fragmentId: "1c39d87e-7843-4c92-932e-6b74c8930283"
fragmentType: "Recipe"
createdBy: "unknown"
createdAt: "2025-10-22T13:49:06.469Z"
updatedAt: "2025-10-22T13:49:06.033Z"
badges: []
---

## Overview

**Usable Live** is a YouTube livestream series demonstrating the capabilities of Usable through practical, real-world use cases. Each 30-minute session showcases different features and workflows, building progressively more complex systems.

---

## 📺 Session Archive

### October 2025 Sessions

#### **October 2, 2025 - Building a CRM in Usable**
**Focus:** Customer Relationship Management  
**Key Topics:**
- Setting up CRM workspace structure
- Defining fragment types for client data
- Populating with sample clients (10 companies)
- Real-world scenario: Conference proposal for TechFlow
- Deal tracking and pipeline visualization

**Demonstrated Features:**
- Fragment creation and organization
- AI-powered client data management
- Pipeline tracking without external CRM tools
- Search and retrieval of client information

**Key Takeaway:** "Usable can replace dedicated CRM software with flexible, AI-powered knowledge management"

---

#### **October 6, 2025 - Time Tracking with Usable (Clarity Case Study)**
**Focus:** Time tracking and productivity analysis  
**Key Topics:**
- Creating time tracking fragment types
- Setting up time entry workflows
- Logging time to projects and tasks
- Generating time reports and insights
- Integration with project data

**Demonstrated Features:**
- Time entry templates with billable/non-billable tracking
- Automated time analysis and reporting
- Weekly time reviews
- Connection between time tracking and CRM data

**Key Takeaway:** "No need for separate time tracking tools - Usable handles it all with full context"

---

#### **October 8, 2025 - Ticket Processing with Usable (Clarity Case Study)**
**Focus:** Issue tracking and support workflows  
**Key Topics:**
- Custom fragment type creation for tickets
- Ticket workflow (New → In Progress → Review → Done)
- Real-world demo with Acme Corp website
- Live bug discovery and ticket creation
- AI-assisted implementation and fixes

**Real Bugs Fixed:**
1. Export button functionality
2. Filter button implementation
3. Keyboard focus accessibility

**Demonstrated Features:**
- Customer-to-developer ticket workflow
- AI-assisted ticket fetching and implementation
- Real-time status updates
- Integration with Orlando framework

**Key Takeaway:** "End-to-end workflow from customer bug discovery to fix to knowledge base"

---

#### **October 10, 2025 - Interactive Chatbot Demo**
**Focus:** Usable Chatbot capabilities  
**Key Topics:**
- Chatbot integration within workspaces
- Query capabilities across systems
- Content generation from fragments
- Business intelligence through AI

**Demo Prompts Used:**
1. "What are the recent updates for our Clarity business?"
2. "Tell me about Acme Corp and any outstanding tickets"
3. "Create a blog about the Acme Corp dashboard"

**Demonstrated Features:**
- Cross-system intelligence
- Real-time data retrieval
- AI-powered content creation
- Natural language querying

**Key Takeaway:** "One chatbot, complete business intelligence - everything connected, everything searchable"

---

#### **October 15, 2025 - n8n Outbound Webhooks (Usable to Email/Slack)**
**Focus:** Outbound automation and notifications  
**Key Topics:**
- Bidirectional automation (IN: Monday's Gmail demo, OUT: Today's webhooks)
- n8n webhook setup and workflows
- Email notifications for high-priority issues
- Slack message formatting and posting
- Real-time team notifications

**Workflows Demonstrated:**
1. **Webhook → Email:** High-priority issue alerts via Gmail/SMTP
2. **Webhook → Slack:** Rich formatted messages with action buttons

**Sample Use Case:**
- Database connection pool exhausted → Automatic email to team + Slack alert in #support-alerts
- Immediate team awareness without manual notification

**Demonstrated Features:**
- Webhook trigger configuration in n8n
- Dynamic content parsing and formatting
- Multi-channel notification strategy
- Integration with 400+ n8n services

**Key Takeaway:** "Bidirectional automation - data flows into Usable (Monday) and triggers actions outbound (today)"

---

#### **October 16, 2025 - Discord Bot Demo**
**Focus:** Production-ready Discord integration  
**Key Topics:**
- Database-free bot architecture (using Discord messages as storage)
- Event-driven design (ThreadCreate, ThreadUpdate, MessageCreate)
- Real-time syncing of forum posts to Usable fragments
- Smart tagging from Discord context
- TypeScript + Zod validation patterns

**Technical Highlights:**
- **Event Handlers:**
  - ThreadCreate → Creates initial fragment
  - MessageCreate → Updates with new replies
  - ThreadUpdate → Syncs tag and title changes
- **Database-Free Design:** Fragment ID posted to Discord, then read back when needed
- **Full Conversation Tracking:** Fetches all messages, formats with timestamps
- **Auto-Tagging:** `discord`, `forum-post`, `server:flowcore`, `channel:bugs-and-issues`

**Live Demo Flow:**
1. Created forum post in Discord: "Demo Bug: App crashes on startup"
2. Bot automatically created Usable fragment
3. Added replies → Fragment updated in real-time with full conversation
4. Changed Discord tags → Tags synced to Usable instantly

**Repository:** [github.com/flowcore-io/usable-discord-bot](https://github.com/flowcore-io/usable-discord-bot)

**Demonstrated Features:**
- Production patterns: graceful shutdown, structured logging, error handling
- TypeScript type safety with Zod validation
- Flexible forum-to-fragment-type mapping via JSON config
- Real-time bidirectional sync
- No external database required

**Key Takeaway:** "Discord bots can be production-ready with proper patterns - database-free designs can be elegant and reliable"

---

#### **October 17, 2025 - Docs From Context with Usable Chat**
**Focus:** AI-powered documentation generation  
**Key Topics:**
- Generating official docs from existing context
- Using Usable Live workspace and Social Media workspace as sources
- No manual writing - everything via Usable Chat
- Auto-capture workflow pattern

**Documentation Generated:**
1. What is a Usable Workspace
2. How to Create a Workspace
3. What is a Fragment
4. What is a Fragment Type
5. Capturing Docs from Chat (optional)

**The Repeatable Pattern:**
```
Ask → Review → Capture → Link → Publish → Iterate
```

**Capture Macro Template:**
```
Capture this answer as a fragment with:
- Title: <title>
- Type: Knowledge (or Docs if available)
- Tags: docs, public, <topic-specific>
- Relations: link to related concepts mentioned
- Visibility: Add to "Usable Public" workspace
Also include a short "Why this matters" section at the end.
```

**Quality Requirements:**
- Must list sources or relationships used
- Clear definitions, concise steps, or examples
- Include links/relations to adjacent concepts
- Flag any missing context for follow-up
- Ready for public reading (tone, structure, headings)

**Demonstrated Features:**
- Context-driven documentation
- Source citation tracking
- Automated cross-linking
- Living docs that stay fresh from ongoing work

**Key Takeaway:** "Bootstrap and maintain docs from real work and signals - not stale, standalone pages"

---

## 🏆 Week 41 Highlights (October 6-10, 2025)

### The Clarity Case Study Week

**Theme:** Building a complete business operations platform in Usable  
**Approach:** Progressive enhancement - each day builds on previous sessions

**What Was Built:**
1. ✅ **Time Tracking System** (Oct 6)
2. ✅ **Project Management** (Oct 7)
3. ✅ **Ticket Processing** (Oct 8)
4. ✅ **Content Management** (Oct 9)
5. ✅ **Intelligent Chatbot** (Oct 10)

**The Integration Power:**
- One workspace (Clarity) contains all business operations
- Connected data: Clients → Projects → Tasks → Time Entries → Tickets
- AI-powered querying across everything
- Knowledge compounds over time
- No context switching required

**Grand Finale Query (Oct 10):**
"Which client has the most tickets?" - Answered instantly with full context across CRM, tickets, and projects.

---

## 🎓 Core Concepts Demonstrated

### 1. Progressive Enhancement
Each session builds naturally on previous work, showing how Usable grows with your needs.

### 2. Data Connections Create Value
Real power emerges when connecting: clients → projects → tasks → time entries → tickets.

### 3. AI as Unified Interface
Chatbot makes complex systems feel simple through natural language.

### 4. Knowledge Compounds
- Ticket solutions → Knowledge base articles
- Retrospectives → Future project insights
- Content repurposes efficiently
- Discord conversations → Searchable fragments
- Context generates documentation

### 5. One Source of Truth
No data silos, no sync issues, no wondering where information lives.

---

## 🔧 Technical Patterns Showcased

### Fragment Types in Action
- **Knowledge:** Documentation, reference material, session notes
- **Recipe:** Step-by-step tutorials and procedures
- **Solution:** Problem fixes and troubleshooting
- **Template:** Reusable code/config patterns
- **Instruction Set:** Automated workflows for LLM
- **Custom Types:** Tickets, Time Entries, Projects, etc.

### Integration Workflows
- **Inbound:** Gmail → n8n → Usable (Week 42, Monday)
- **Outbound:** Usable → n8n → Email/Slack (Week 42, Wednesday)
- **Real-time:** Discord forum posts ↔ Usable fragments (Week 42, Thursday)
- **Validation:** GitHub PR → Validator → Usable (Week 42, Tuesday)

### Automation Patterns
- Event-driven architecture (Discord bot handlers)
- Database-free design (using existing systems as storage)
- Webhook-based integrations
- AI-assisted content generation
- Real-time syncing strategies

---

## 📊 Before vs. After Usable

### Before Usable:
- Multiple tools (Toggl, Asana, Zendesk, WordPress, Discord searches, etc.)
- Data scattered across platforms
- Manual reporting and aggregation
- Context lost between systems
- High subscription costs
- Conversations lost in chat history

### With Usable:
- One workspace for everything
- All data connected and contextual
- AI-powered insights on demand
- Natural language queries
- Single source of truth
- Conversations become searchable knowledge
- Documentation generated from context

---

## 🚀 Key Takeaways for Implementation

### Session Format
- **Duration:** 30 minutes max
- **Structure:** Welcome (2 min) + Demo (25 min) + Wrap-up (3 min)
- **Approach:** Real scenarios, live coding, no rehearsed perfection

### Demo Best Practices
1. Show the problem first (make it relatable)
2. Build progressively (don't jump to complex features)
3. Use realistic data (Acme Corp, TechFlow, etc.)
4. Demonstrate connections between systems
5. End with "aha moment" (grand query, integration reveal)

### Content Repurposing
Each session generates:
- Detailed session notes (Knowledge fragment)
- Blog post potential
- Social media content
- Documentation snippets
- Code examples (Discord bot, n8n workflows)
- Tutorial materials

---

## 🔗 Resources

### Repositories Showcased
- **Discord Bot:** [github.com/flowcore-io/usable-discord-bot](https://github.com/flowcore-io/usable-discord-bot)
- **Acme Corp Demo Site:** [flowcore-io.github.io/usable-live-acme-corp/](https://flowcore-io.github.io/usable-live-acme-corp/)

### Workspaces Referenced
- **Usable Live:** Session planning and notes
- **Clarity:** Case study workspace (CRM, time tracking, tickets, projects)
- **Usable Public:** Public documentation and examples
- **Social Media:** Content planning and publishing
- **Flowcore:** Discord bot integration workspace

### Tools Integrated
- **n8n:** Workflow automation (400+ integrations)
- **Discord:** Community forum → Knowledge base
- **Orlando:** Web framework for demo sites
- **GitHub:** PR validation workflows
- **Gmail/SMTP:** Email notifications
- **Slack:** Team notifications

---

## 📅 Session Schedule Pattern

### Weekly Themes
- **Week 40:** CRM fundamentals
- **Week 41:** Complete business platform (Clarity)
- **Week 42:** Automation and integrations

### Daily Format
- Monday through Friday
- 30-minute sessions
- Consistent time slot
- YouTube livestream
- Interactive Q&A

---

## 🎯 Viewer Journey

### Beginner → Advanced Path
1. **Oct 2:** Basic workspace setup (CRM)
2. **Oct 6-10:** System building (time, projects, tickets, content)
3. **Oct 10:** Integration reveal (chatbot brings it together)
4. **Oct 14-17:** Advanced automation (webhooks, bots, docs)

### Skills Developed
- Fragment type design
- Tagging strategies
- Workflow modeling
- AI prompt engineering
- Integration patterns
- Automation setup
- Production-ready bot development
- Documentation generation

---

## 💡 Innovation Highlights

### Database-Free Architecture (Discord Bot)
Using Discord messages to store fragment IDs eliminates need for external database while maintaining reliability.

### Context-Driven Documentation (Oct 17)
Official docs generated entirely from existing work - livestreams, fragments, social media workspace - with zero manual writing.

### Bidirectional Automation (Week 42)
Complete cycle: Data IN (Gmail/GitHub) → Processing (Usable) → Actions OUT (Email/Slack/Discord)

### Living Knowledge Base
Every ticket, issue, conversation, and session compounds into searchable, connected knowledge.

---

## 🎬 Memorable Moments

1. **The Time Report Reveal** (Oct 6) - Actual vs estimated hours compared in real-time
2. **Multi-Project Dashboard** (Oct 7) - Visual overview of all work at once
3. **Ticket to Knowledge** (Oct 8) - Bug becomes searchable solution
4. **Content Multiplication** (Oct 9) - One blog post → 9 content pieces
5. **The Grand Query** (Oct 10) - Cross-system intelligence demonstration
6. **Real-time Discord Sync** (Oct 16) - Forum post to fragment in seconds
7. **Docs Generated Live** (Oct 17) - Complete documentation created from context during stream

---

## 📈 Success Metrics

### Platform Capabilities Demonstrated
- ✅ CRM functionality
- ✅ Time tracking
- ✅ Project management
- ✅ Ticket/issue tracking
- ✅ Content management
- ✅ AI-powered chatbot
- ✅ Webhook integrations
- ✅ Discord bot automation
- ✅ Documentation generation
- ✅ Email/Slack notifications

### Integration Patterns Shown
- ✅ Gmail → Usable (inbound)
- ✅ GitHub → Usable (validation)
- ✅ Usable → Email/Slack (outbound)
- ✅ Discord ↔ Usable (bidirectional)
- ✅ Context → Documentation (AI generation)
- ✅ n8n workflows (400+ services)

### Production-Ready Code
- ✅ TypeScript with Zod validation
- ✅ Event-driven architecture
- ✅ Structured logging
- ✅ Graceful shutdown handling
- ✅ Error handling and recovery
- ✅ Open source and documented

---

## 🎓 For New Viewers

### Where to Start
1. **Oct 2:** See the basics (CRM setup)
2. **Oct 6-10:** Watch the progression (Clarity week)
3. **Oct 17:** Understand the meta (docs from context)
4. **Oct 16:** See production patterns (Discord bot)

### What You'll Learn
- How to structure workspaces
- Fragment type strategies
- AI collaboration patterns
- Integration techniques
- Automation workflows
- Real-world application building

### Call to Action
**"Now go and make something Usable!"** - Every session closing

---

## 📝 Notes & Observations

### Evolution of Content
Sessions evolved from basic features (CRM) to complex integrations (Discord bot, docs generation), showing platform maturity and versatility.

### Community Focus
Public workspaces, open source repositories, and transparent development demonstrate commitment to community learning and collaboration.

### Documentation Philosophy
"Docs from Context" session embodies the Usable philosophy: knowledge emerges from real work, not manual documentation effort.

### Production Readiness
Discord bot session showcased enterprise-grade patterns: type safety, validation, logging, error handling - not just demos but deployable code.

---

## 🔮 Future Directions

### Potential Topics (from sessions)
- Deep dive into advanced project management
- Security and permissions
- Team collaboration workflows
- Scaling for larger teams
- Mobile/on-the-go access
- Multi-server Discord support
- Reaction tracking for sentiment
- Two-way sync (Usable ↔ Discord status)
- Analytics and insights dashboards

### Community Requests
_To be collected from viewer feedback and Discord interactions_

---

## 📚 Related Documentation

### Fragment References
- Master calendar and planning documents
- Individual session notes (linked above)
- Week highlights and summaries
- Technical implementation guides
- Integration examples

### External Resources
- Usable API documentation
- Discord.js documentation
- n8n workflow examples
- Orlando framework docs
- MCP server integration guide

---

**Last Updated:** October 17, 2025  
**Source Workspace:** Usable Live  
**Documentation Status:** Living document, updated with each session  
**Public Access:** Available in Usable Public workspace

---

*This documentation was created from the actual session notes and transcripts stored in the Usable Live workspace, demonstrating the "docs from context" approach showcased in the October 17, 2025 session.*