---
title: "Discord Bot Error Handling Best Practices"
description: "Comprehensive guide to handling errors gracefully in Discord bots, including API errors, permission issues, and user input validation"
fragmentId: "86e1b5d6-7bb4-45b0-abf4-4aeeb73fab6f"
fragmentType: "Knowledge"
createdBy: "unknown"
createdAt: "2025-10-22T12:31:47.273Z"
updatedAt: "2025-10-22T12:31:46.743Z"
badges: []
---

Proper error handling is crucial for a reliable Discord bot. This guide covers common error scenarios and how to handle them gracefully.

## Why Error Handling Matters

- **User Experience**: Prevent crashes and show helpful messages
- **Debugging**: Log errors for troubleshooting
- **Stability**: Keep the bot running even when things go wrong
- **Security**: Prevent exposing sensitive information in error messages

## Common Error Types

### API Errors

Discord API errors have specific codes:

```javascript
const { DiscordAPIError } = require('discord.js');

try {
  await message.delete();
} catch (error) {
  if (error instanceof DiscordAPIError) {
    switch (error.code) {
      case 10008:
        console.log('Message not found');
        break;
      case 50013:
        console.log('Missing permissions');
        break;
      case 50035:
        console.log('Invalid form body');
        break;
      default:
        console.error('API Error:', error.code, error.message);
    }
  }
}
```

### Permission Errors

Always check permissions before performing actions:

```javascript
async function deleteMessage(message) {
  const botMember = message.guild.members.me;
  
  if (!botMember.permissions.has('ManageMessages')) {
    await message.reply('I need the Manage Messages permission!');
    return;
  }
  
  try {
    await message.delete();
  } catch (error) {
    console.error('Failed to delete message:', error);
  }
}
```

## Global Error Handlers

### Process-Level Handlers

```javascript
process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1);
});
```

## Best Practices Summary

1. **Always use try-catch** for async operations
2. **Check permissions** before actions
3. **Validate user input** at multiple levels
4. **Log errors** with context information
5. **Show user-friendly messages**, log technical details

This is an update test
