---
title: "N8N Workflow Plan - Usable Docs Automation"
description: "Complete implementation plan for automating fragment-to-docs synchronization using N8N. Includes webhook setup, GitHub integration, path generation logic, fragment type mapping, and production deployment checklist. Verified with actual webhook payloads from Flowcore."
fragmentId: "223079ff-8660-4d98-b2be-f1e65e33555f"
fragmentType: "Recipe"
createdBy: "unknown"
createdAt: "2025-10-22T15:28:19.697Z"
updatedAt: "2025-10-22T15:28:19.165Z"
badges: []
---

Complete implementation plan for automating fragment-to-docs synchronization using N8N.

## 🎯 Overview

**Goal**: Automatically sync published Usable fragments to the docs site via git commits.

**Trigger**: Webhook from Usable (fragment created, updated, or deleted)  
**Result**: Markdown file committed to `usable-docs` repo → GitHub Actions deploys

## ✨ Key Updates (Verified with Actual Payload)

This plan has been updated based on the **actual webhook payload** received from Flowcore:

**✅ Verified Structure:**

- **Wrapper format**: Payload wrapped with `headers`, `params`, `query`, `body`
- **Event data**: All fragment data in `body.data.*` object
- **Event type**: `body.type` field (`fragment.created`, etc.)
- **Fragment type**: UUID `body.data.fragmentTypeId` (requires mapping)
- **User identification**: `body.data.createdBy` UUID (not email)
- **Timestamps**: ISO 8601 format (`createdAt`, no `updatedAt` on create)
- **Additional fields**: `status`, `createdVia`, `occurredAt`
- **🎯 DELETE EVENTS NOW INCLUDE TAGS!** This simplifies the workflow significantly

**📋 Key Implementation Notes:**

1. Access pattern in N8N: `$input.item.json.body.data.*`
2. Event type from: `$input.item.json.body.type`
3. Fragment type mapping required (UUID → "Recipe", "Knowledge", etc.)
4. Fragment ID is `body.data.id` (also available as `body.fragmentId`)
5. Author tracking uses `createdBy` UUID instead of email
6. **All events send complete fragment data** (create, update, delete)
7. **Update events send full object, not just changed fields** - keeps workflow simple!
8. **Delete events include full metadata (title, tags, type)** for path regeneration

## 📋 Workflow Steps (Simplified - No Registry Needed!)

```
[1] Webhook Trigger (Receive fragment event)
      ↓
[2] Filter Fragments (Check tags & workspace)
      ↓
[3] Parse Fragment Details (Generate path, markdown, commit message)
      ↓
[4] Switch: Operation Type
      ├─ create/update (0) → [5a] GitHub Edit File (upserts!)
      │
      └─ delete (2)        → [5b] GitHub Delete File
      ↓
[5] Success Response
```

**Key Features:**

- ✅ **Simple path regeneration** - Works identically for create/update/delete
- ✅ **Delete events include tags** - Full metadata available for path generation
- ✅ **No registry needed** - Path is calculated on-the-fly from fragment data
- ✅ **5 nodes total** - Clean, maintainable workflow
- ✅ **Single source of truth** - Path generation logic in one place (Node 3)

**Why This Design is Perfect:**

- ✅ **Simple**: Only 5 nodes total - easy to understand and maintain
- ✅ **Reliable**: GitHub API handles authentication and retries
- ✅ **No Registry**: Path generation works for all operations
- ✅ **Idempotent**: Safe to retry any operation
- ✅ **Fast**: No extra reads/writes for registry management
- ✅ **Clean**: Single source of truth for path generation logic

## 🚀 Quick Start

**To set up the GitHub authentication right now:**

1. **Create GitHub Token**:
   - Go to https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name it: `N8N Usable Docs Bot`
   - Select scope: ✓ `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Add to N8N**:
   - In N8N, click **Credentials** in the left menu
   - Click **Add Credential**
   - Search for and select **GitHub**
   - Authentication: **Access Token**
   - Paste your token
   - Click **Test** to verify
   - Click **Save** as "GitHub - Usable Docs Bot"

3. **Use in GitHub Node**:
   - In your workflow, add a GitHub node
   - Select your saved credential
   - Configure the file operations as shown below

## 🔧 Node-by-Node Implementation

### Node 1: Webhook Trigger

**Type**: `n8n-nodes-base.webhook`

```json
{
  "name": "Usable Fragment Webhook",
  "type": "n8n-nodes-base.webhook",
  "parameters": {
    "path": "usable-docs-sync",
    "httpMethod": "POST",
    "authentication": "headerAuth",
    "options": {
      "responseMode": "responseNode"
    }
  },
  "credentials": {
    "httpHeaderAuth": {
      "name": "Usable Webhook Auth",
      "data": {
        "name": "Authorization",
        "value": "Bearer {{ $env.USABLE_WEBHOOK_SECRET }}"
      }
    }
  }
}
```

**Webhook URL**: `https://n8n.yourdomain.com/webhook/usable-docs-sync`

**Complete Webhook Payload** (actual structure from Flowcore):

```json
{
  "headers": {
    "content-type": "application/json",
    "content-length": "2431"
  },
  "params": {},
  "query": {},
  "body": {
    "type": "fragment.created",
    "workspaceId": "b0881475-b514-405d-912e-1aa4428a5eb9",
    "fragmentId": "ebd8a899-bde2-44e8-8eea-ad3047b4dac8",
    "data": {
      "id": "ebd8a899-bde2-44e8-8eea-ad3047b4dac8",
      "workspaceId": "b0881475-b514-405d-912e-1aa4428a5eb9",
      "fragmentTypeId": "7bf93da2-31c5-4697-a2fe-378cb621f9b5",
      "title": "Building a Discord Status Bot",
      "summary": "Step-by-step guide to creating a Discord bot...",
      "content": "# Building a Discord Status Bot\n\nMarkdown content...",
      "tags": ["status:published", "repo:usable-docs", "discord-bots"],
      "status": "active",
      "createdVia": "mcp",
      "createdBy": "9e9de400-5b61-48a8-90dc-5edc9a959089",
      "createdAt": "2025-10-21T19:39:26.186Z"
    },
    "occurredAt": "2025-10-21T19:39:26.186Z"
  },
  "webhookUrl": "https://n8n.flowcore.app/webhook-test/...",
  "executionMode": "test"
}
```

**Key Structure:**

- **Top level**: `headers`, `params`, `query`, `body`, `webhookUrl`, `executionMode`
- **Fragment data path**: `body.data.*` (all fragment fields are here)
- **Event type**: `body.type` (`fragment.created`, `fragment.updated`, `fragment.deleted`)
- **Fragment type**: `body.data.fragmentTypeId` (UUID requiring mapping)

**Note**: In N8N, access the fragment data via `$input.item.json.body.data.*`

### Node 2: Validate & Filter

**Type**: `n8n-nodes-base.function`

```javascript
// Validate that fragment should be published
const payload = $input.item.json.body;
const fragment = payload.data;
const eventType = payload.type;

// Check required tags (with defensive check for all operations)
const tags = fragment.tags || [];
const shouldPublish = tags.includes("status:published") &&
  tags.includes("repo:usable-docs");

if (!shouldPublish) {
  return {
    skip: true,
    reason:
      "Fragment not marked for publishing (missing status:published or repo:usable-docs tags)",
  };
}

return {
  skip: false,
  eventType: eventType,
  fragment: fragment,
};
```

**If skip = true**: Route to "Skip & Respond" node  
**If skip = false**: Continue to git operations

### Node 3: Parse Fragment Details

**Type**: `n8n-nodes-base.function`

**Purpose**: Generate file path, markdown content, and commit message for ALL operations (create, update, AND delete).

**🎯 KEY UPDATE**: Delete events now include full fragment metadata (title, tags, fragmentType), so path generation works identically for all event types!

**Key Points**:

- ✅ Path generation works identically for create/update/delete
- ✅ Delete events include all fragment metadata (title, tags, type)
- ✅ No need for fragment registry - path is regenerated on-the-fly
- ✅ Content processing includes `stripFirstHeading()` to avoid duplicate titles

**⚠️ Important**: This code includes the `stripFirstHeading()` function that removes the first H1 heading from fragment content to prevent duplicate titles with Starlight's auto-rendered frontmatter title. See the "Content Processing" section below for details.

```javascript
// Get fragment from previous node
const fragment = $input.item.json.fragment || $input.item.json;
const eventType = $input.item.json.eventType;

// ============================================
// FRAGMENT TYPE MAPPING
// ============================================
// Map fragmentTypeId (UUID) to human-readable names
const FRAGMENT_TYPE_MAP = {
  "7bf93da2-31c5-4697-a2fe-378cb621f9b5": "Recipe",
  "ac91ca9e-4cac-422f-b30a-70e94bb74ea6": "Knowledge",
  "72c853f4-dece-4a81-af31-de29354294a2": "Solution",
  "6037e606-29d5-4a5b-9b6b-05716da317b1": "Template",
  "a7224d6a-7ad7-43cb-a914-30e8efd37fdd": "Instruction Set",
};

// ============================================
// STEP 1: Generate File Path
// ============================================

function generateDocsPath(fragment, fragmentTypeName) {
  const title = fragment.title || "untitled";
  // Explicitly handle undefined/null tags - don't rely on destructuring defaults
  const tags = Array.isArray(fragment.tags) ? fragment.tags : [];

  // Map fragment type to directory (1:1 mapping)
  const baseDir = fragmentTypeName.toLowerCase().replace(/\s+/g, "-"); // "Recipe" → "recipe", "Instruction Set" → "instruction-set"

  // Extract custom slug or build from title
  const slugTag = tags.find((t) => t.startsWith("slug:"));
  let path;

  if (slugTag) {
    // Use explicit slug (respects subdirectories if user wants them via slug:path/to/file)
    path = slugTag.replace("slug:", "");
  } else {
    // Build from title only - NO subdirectories for flat structure
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    path = slug; // ✅ Flat structure - no subdirectories!
  }

  return `src/content/docs/${baseDir}/${path}.md`;
}

// ============================================
// STEP 2: Calculate Badges
// ============================================

function calculateBadges(fragment) {
  const badges = [];
  // Explicitly handle undefined/null tags
  const tags = Array.isArray(fragment.tags) ? fragment.tags : [];
  const createdAt = fragment.createdAt;
  const updatedAt = fragment.updatedAt;

  // Manual badges from tags
  if (tags.includes("experimental")) badges.push("experimental");
  if (tags.includes("deprecated")) badges.push("deprecated");

  // Auto-calculated time-based badges (only if dates are available)
  if (createdAt) {
    const now = Date.now();
    const created = new Date(createdAt).getTime();
    const updated = updatedAt ? new Date(updatedAt).getTime() : created;

    const daysSinceCreation = (now - created) / (1000 * 60 * 60 * 24);
    const daysSinceUpdate = (now - updated) / (1000 * 60 * 60 * 24);

    if (daysSinceCreation <= 30) badges.push("new");
    if (daysSinceUpdate <= 7 && daysSinceCreation > 7) badges.push("updated");
  }

  return badges;
}

// ============================================
// STEP 3: Generate Frontmatter & Content
// ============================================

function stripFirstHeading(content) {
  // ⚠️ CRITICAL: Remove the first H1 heading from content
  //
  // WHY: Starlight automatically renders the frontmatter "title" field as an H1 heading.
  // If we keep the H1 in the content, we'll get duplicate headings on the page.
  //
  // WHAT IT DOES:
  // - Matches: /^#\s+[^\n]+\n*/
  //   ^      - Start of string
  //   #      - Literal # character
  //   \s+    - One or more whitespace
  //   [^\n]+ - One or more characters that aren't newline (the heading text)
  //   \n*    - Zero or more newlines after the heading
  //
  // EXAMPLE:
  // Input:  "# Building a Discord Bot\n\nLearn how to..."
  // Output: "Learn how to..."
  //
  if (!content) return "";
  return content.replace(/^#\s+[^\n]+\n*/, "").trimStart();
}

function generateMarkdown(fragment, badges, fragmentTypeName) {
  // Strip the first H1 heading since Starlight auto-renders the frontmatter title
  const processedContent = stripFirstHeading(fragment.content);

  const frontmatter = `---
title: "${(fragment.title || "Untitled").replace(/"/g, '\\"')}"
description: "${(fragment.summary || "").replace(/"/g, '\\"')}"
fragmentId: "${fragment.id}"
fragmentType: "${fragmentTypeName}"
createdBy: "${fragment.createdBy || "unknown"}"
createdAt: "${fragment.createdAt || new Date().toISOString()}"
updatedAt: "${
    fragment.updatedAt || fragment.createdAt || new Date().toISOString()
  }"
badges: ${JSON.stringify(badges)}
---

${processedContent}`;

  return frontmatter;
}

// ============================================
// MAIN PROCESSING
// ============================================

// Get fragment type name from mapping
const fragmentTypeName = FRAGMENT_TYPE_MAP[fragment.fragmentTypeId] ||
  "Unknown";

const filePath = generateDocsPath(fragment, fragmentTypeName);
const badges = calculateBadges(fragment);

// Determine operation type
const operation = eventType === "fragment.deleted"
  ? "delete"
  : eventType === "fragment.created"
  ? "create"
  : "update";

// Generate markdown content (skip for delete operations)
const markdownContent = operation === "delete"
  ? null
  : generateMarkdown(fragment, badges, fragmentTypeName);

// Generate commit message
const commitMessages = {
  create: `docs: [CREATE] ${fragment.title || "Untitled"}`,
  update: `docs: [UPDATE] ${fragment.title || "Untitled"}`,
  delete: `docs: [DELETE] ${fragment.title || "Untitled"}`,
};

const commitMessage = `${commitMessages[operation]}

Fragment ID: ${fragment.id}
Path: ${filePath}
Auto-generated by N8N`;

// Return data for GitHub node
return {
  operation: operation,
  filePath: filePath,
  fileContent: markdownContent,
  fragmentTitle: fragment.title || "Untitled",
  fragmentId: fragment.id,
  commitMessage: commitMessage,
};
```

### Node 4: Switch - Operation Type

**Type**: `n8n-nodes-base.switch`

**Configuration**:

- **Mode**: `Rules`
- **Value**: `={{ $json.operation }}`

**Rules**:

- **Output 0**: `operation` equals `create` OR `operation` equals `update`
- **Output 2**: `operation` equals `delete`

This routes the workflow to the appropriate GitHub operation based on the event type.

---

### Node 5a: GitHub Edit File (Create/Update)

**Type**: `n8n-nodes-base.github`

**Connected to**: Switch output 0 (create/update)

**Configuration**:

1. **Credentials**: Select your saved GitHub credentials
2. **Resource**: `File`
3. **Operation**: `Edit` (this is an upsert - creates OR updates!)

**Parameters**:

- **Owner**: `flowcore-io`
- **Repository**: `usable-docs`
- **File Path**: `={{ $json.filePath }}`
- **File Content**: `={{ $json.fileContent }}`
- **Commit Message**: `={{ $json.commitMessage }}`
- **Branch**: `main`

**Why this works for both create AND update:**

GitHub's Edit/Update file operation automatically handles both cases:

- If file doesn't exist → Creates it
- If file exists → Updates it

No need to check if the file exists first!

---

### Node 5b: GitHub Delete File

**Type**: `n8n-nodes-base.github`

**Connected to**: Switch output 2 (delete)

**Configuration**:

1. **Credentials**: Select your saved GitHub credentials
2. **Resource**: `File`
3. **Operation**: `Delete`

**Parameters**:

- **Owner**: `flowcore-io`
- **Repository**: `usable-docs`
- **File Path**: `={{ $json.filePath }}` (from Node 3 path generation)
- **Commit Message**: `={{ $json.commitMessage }}`
- **Branch**: `main`

**Options**:

- **Continue on Fail**: `true` (in case file was already deleted)

**How it works:**

Since delete events now include full metadata (tags, title, fragmentType), Node 3 generates the exact same path that was used during creation. No registry needed!

---

### Node 6: Success Response

**Type**: `n8n-nodes-base.respondToWebhook`

```json
{
  "name": "Send Success Response",
  "type": "n8n-nodes-base.respondToWebhook",
  "parameters": {
    "respondWith": "json",
    "responseBody": {
      "success": true,
      "operation": "={{ $json.operation }}",
      "filePath": "={{ $json.filePath }}",
      "fragmentId": "={{ $json.fragmentId }}",
      "message": "Documentation updated successfully"
    },
    "options": {
      "responseCode": 200
    }
  }
}
```

### Node 7: Error Handler

**Type**: `n8n-nodes-base.function`

```javascript
// Error handling node
const error = $input.item.json.error || $input.item.json;

return {
  success: false,
  error: error.message || "Unknown error",
  timestamp: new Date().toISOString(),
};
```

**Connect to**: Error response webhook node

### Node 8: Skip Response (Alternative path)

**Type**: `n8n-nodes-base.respondToWebhook`

```json
{
  "name": "Send Skip Response",
  "type": "n8n-nodes-base.respondToWebhook",
  "parameters": {
    "respondWith": "json",
    "responseBody": {
      "success": true,
      "skipped": true,
      "reason": "={{ $json.reason }}",
      "message": "Fragment not published to docs"
    },
    "options": {
      "responseCode": 200
    }
  }
}
```

## 🔐 Required Credentials

### 1. GitHub Personal Access Token

**Scopes needed**:

- `repo` (full repository access)

**Setup**:

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select `repo` scope
4. Copy token and save in N8N credentials

### 2. Webhook Secret

**Generate**:

```bash
openssl rand -hex 32
```

**Configure in N8N**:

- Add as environment variable: `USABLE_WEBHOOK_SECRET`
- Use in webhook authentication

### 3. GitHub Credentials in N8N

**How to add**:

1. In N8N, go to **Credentials** → **Add Credential**
2. Select **GitHub** (or **GitHub API**)
3. Choose authentication method:
   - **Access Token**: Paste your Personal Access Token
4. **Test** the credential to verify it works
5. **Save** with a name like "GitHub - Usable Docs Bot"

**Commit author** is automatically set by GitHub based on your token/account.

## 📋 Fragment Type Mapping

The webhook payload includes `fragmentTypeId` as a UUID. The N8N workflow maps these to human-readable names:

| Fragment Type   | UUID                                   |
| --------------- | -------------------------------------- |
| Recipe          | `7bf93da2-31c5-4697-a2fe-378cb621f9b5` |
| Knowledge       | `ac91ca9e-4cac-422f-b30a-70e94bb74ea6` |
| Solution        | `72c853f4-dece-4a81-af31-de29354294a2` |
| Template        | `6037e606-29d5-4a5b-9b6b-05716da317b1` |
| Instruction Set | `a7224d6a-7ad7-43cb-a914-30e8efd37fdd` |

**Note**: These UUIDs are specific to the "Usable Public" workspace. If you add new fragment types or use a different workspace, update the `FRAGMENT_TYPE_MAP` in Node 4.

## 🎯 Flowcore Event Configuration

The webhook is automatically configured in Flowcore and sends the actual payload structure shown above. The event types are:

- `fragment.created` - New fragment created
- `fragment.updated` - Fragment content/metadata updated
- `fragment.deleted` - Fragment removed

The payload structure is nested with all fragment data under the `data` object, and the event type is in the top-level `type` field.

## ✅ Payload Verification

Based on the actual webhook payload received, our test fragment generates:

**Input from `body.data`:**

- Fragment Type: `Recipe` (from UUID `7bf93da2-31c5-4697-a2fe-378cb621f9b5`)
- Title: `Building a Discord Status Bot`
- Tags: `["status:published", "repo:usable-docs", "discord-bots", "tutorial", "nodejs"]`
- Fragment ID: `ebd8a899-bde2-44e8-8eea-ad3047b4dac8`
- Event Type: `fragment.created` (from `body.type`)

**Generated File Path:**

```
src/content/docs/recipe/discord-bots/building-a-discord-status-bot.md
```

**Path Breakdown:**

1. Base directory: `recipe` (from fragment type mapping)
2. Subdirectory: `discord-bots` (first non-system tag)
3. Slug: `building-a-discord-status-bot` (from title)

**Generated Frontmatter:**

```yaml
---
title: "Building a Discord Status Bot"
description: "Step-by-step guide to creating a Discord bot that monitors service status and sends notifications"
fragmentId: "ebd8a899-bde2-44e8-8eea-ad3047b4dac8"
fragmentType: "Recipe"
createdBy: "9e9de400-5b61-48a8-90dc-5edc9a959089"
createdAt: "2025-10-21T19:39:26.186Z"
updatedAt: "2025-10-21T19:39:26.186Z"
badges: ["new"]
---
```

**Content Processing (Important!):**

The workflow automatically strips the first H1 heading from fragment content to avoid duplicates with Starlight's auto-rendered title.

**Before (Fragment content):**

```markdown
# Building a Discord Status Bot

Learn how to build a Discord bot that monitors your services...

## Prerequisites

...
```

**After (Processed in N8N):**

```markdown
Learn how to build a Discord bot that monitors your services...

## Prerequisites

...
```

This ensures the page shows only ONE title (from the frontmatter), not two.

**N8N Access Paths:**

- Event type: `$input.item.json.body.type`
- Fragment title: `$input.item.json.body.data.title`
- Fragment tags: `$input.item.json.body.data.tags`
- Fragment content: `$input.item.json.body.data.content`

## 🧪 Testing Plan

### Test Case 1: Create Fragment

**Action**: Create new Recipe fragment with tags `["discord-bots", "status:published", "repo:usable-docs"]`

**Expected**:

- File created at `/recipe/discord-bots/fragment-title.md`
- Git commit message: "docs: [CREATE] Fragment Title"
- GitHub Actions triggers deployment
- Page appears on docs site

### Test Case 2: Update Fragment

**Action**: Update existing fragment content

**Expected**:

- File updated in place
- Git commit message: "docs: [UPDATE] Fragment Title"
- Changes deploy to docs site

### Test Case 3: Delete Fragment

**Action**: Delete fragment from Usable

**Expected**:

- File deleted from repo
- Empty directories cleaned up
- Git commit message: "docs: [DELETE] Fragment Title"
- Page removed from docs site

### Test Case 4: Skip Publishing

**Action**: Create fragment without `status:published` tag

**Expected**:

- Workflow skips processing
- No git commit
- Response: `{ skipped: true }`

## 📊 Monitoring & Logging

### Workflow Logs

Check N8N execution logs for:

- Webhook payloads received
- Validation results (skip/process)
- File operations performed
- Git commit output
- Errors and stack traces

### GitHub Actions

Monitor deployments:

- Check Actions tab for build status
- Verify successful deployments
- Check deployment URL

### Error Notifications

Set up alerts for:

- GitHub API failures (rate limits, permissions)
- Webhook authentication failures
- File path generation errors

## 🔄 Rollback Strategy

If something goes wrong:

1. **Revert Git Commit**:
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

2. **Pause N8N Workflow**:
   - Disable webhook in N8N
   - Fix issue
   - Re-enable

3. **Manual Cleanup**:
   - Remove incorrect files from repo
   - Commit and push
   - GitHub Actions will deploy corrected version

## 🚀 Deployment Checklist

- [ ] Create GitHub Personal Access Token (`repo` scope)
- [ ] Add GitHub credentials in N8N
- [ ] Generate webhook secret (`openssl rand -hex 32`)
- [ ] Configure N8N workflow (5 nodes total):
  - [ ] Node 1: Webhook Trigger (with authentication)
  - [ ] Node 2: Filter Fragments
  - [ ] Node 3: Parse Fragment Details
  - [ ] Node 4: Switch - Operation Type
  - [ ] Node 5a: GitHub Edit File (upsert for create/update)
  - [ ] Node 5b: GitHub Delete File (for delete)
  - [ ] Node 6: Success Response
- [ ] Test with sample fragment (create/update/delete)
- [ ] Verify commits appear in GitHub
- [ ] Confirm GitHub Actions deployment works
- [ ] Check docs site for new page
- [ ] Enable for production

---

**Total Setup Time**: ~20-30 minutes (super simple with GitHub API)  
**Maintenance**: Minimal (only update if schema changes)  
**Reliability**: High (GitHub API is idempotent and retry-safe)  
**Complexity**: Low (5 nodes, no registry management needed!)