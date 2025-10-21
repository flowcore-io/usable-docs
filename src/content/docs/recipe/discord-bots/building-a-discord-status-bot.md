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

# Building a Discord Status Bot

Learn how to build a Discord bot that monitors your services and sends real-time status updates to your Discord channels.

## Prerequisites

Before you start, make sure you have:
- Node.js 18+ installed
- A Discord account and server
- Basic JavaScript/TypeScript knowledge

## Step 1: Create a Discord Application

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Give your bot a name
4. Navigate to the "Bot" tab
5. Click "Add Bot" and confirm

## Step 2: Set Up Your Project

```bash
mkdir discord-status-bot
cd discord-status-bot
npm init -y
npm install discord.js dotenv
```

## Step 3: Create the Bot Code

Create a file called `index.js`:

```javascript
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);
```

## Step 4: Configure Environment Variables

Create a `.env` file:

```
DISCORD_TOKEN=your_bot_token_here
CHANNEL_ID=your_channel_id_here
```

## Step 5: Add Status Monitoring

Extend your bot to check service status and send notifications when changes occur.

## Next Steps

- Add error handling
- Implement custom status checks
- Set up automated monitoring intervals
- Deploy to production

## Resources

- [Discord.js Documentation](https://discord.js.org/)
- [Discord Developer Portal](https://discord.com/developers/docs)
