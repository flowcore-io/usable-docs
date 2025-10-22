---
title: "Discord Bot Rate Limiting"
description: "Understanding and handling Discord API rate limits to keep your bot running smoothly"
fragmentId: "245f946a-0871-4bbe-af39-ddfcc6a3af1d"
fragmentType: "Recipe"
createdBy: "9e9de400-5b61-48a8-90dc-5edc9a959089"
createdAt: "2025-10-22T09:47:05.305Z"
updatedAt: "2025-10-22T09:47:05.305Z"
badges: ["new"]
---

Learn how to handle Discord's API rate limits effectively to prevent your bot from being throttled.

## Understanding Rate Limits

Discord implements rate limiting to prevent API abuse:

- **Global Rate Limit**: 50 requests per second across all endpoints
- **Per-Route Limits**: Varies by endpoint (e.g., sending messages)
- **429 Response**: Too Many Requests error when limit exceeded

## Rate Limit Headers

Discord sends rate limit info in response headers:

```
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 4
X-RateLimit-Reset: 1470173023
X-RateLimit-Bucket: abcd1234
```

## Handling Rate Limits

### Basic Retry Logic

```javascript
async function sendWithRetry(channel, content, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await channel.send(content);
    } catch (error) {
      if (error.code === 429) {
        const retryAfter = error.retry_after || 1000;
        console.log(`Rate limited, waiting ${retryAfter}ms`);
        await new Promise(resolve => setTimeout(resolve, retryAfter));
        continue;
      }
      throw error;
    }
  }
  throw new Error('Max retries exceeded');
}
```

## Best Practices

### Batch Operations

Instead of sending messages one by one, batch with delays:

```javascript
// ✅ Good: Batch with delays
for (let i = 0; i < users.length; i++) {
  await users[i].send('Hello!');
  if ((i + 1) % 5 === 0) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}
```

### Cache Frequently Used Data

```javascript
// Cache guild data instead of fetching repeatedly
const guildCache = new Map();

function getGuildConfig(guildId) {
  if (guildCache.has(guildId)) {
    return guildCache.get(guildId);
  }
  
  const config = fetchFromDatabase(guildId);
  guildCache.set(guildId, config);
  return config;
}
```

## Common Mistakes

- Sending messages too quickly in a loop
- Not caching user/guild data
- Ignoring 429 responses
- Not implementing exponential backoff
- Fetching data unnecessarily
