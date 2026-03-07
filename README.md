[![CI](https://github.com/theluckystrike/chrome-extension-toolkit/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/chrome-extension-toolkit/actions)
[![npm](https://img.shields.io/npm/v/@theluckystrike/chrome-extension-toolkit)](https://www.npmjs.com/package/@theluckystrike/chrome-extension-toolkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

# chrome-extension-toolkit

One install, every Chrome extension helper you need. Re-exports all five `@theluckystrike/webext-*` packages.

## Install

```bash
npm install @theluckystrike/chrome-extension-toolkit
```

That single install gives you context menus, notifications, tabs, badge, and offscreen helpers — all fully typed.

## Usage

```typescript
import {
  createMenu, registerMenus,          // context menus
  notify, notifyBasic,                 // notifications
  getActiveTab, openTab, closeTab,     // tabs
  setBadge, showCount, clearBadge,     // badge
  ensureOffscreen, sendToOffscreen,    // offscreen
} from '@theluckystrike/chrome-extension-toolkit';

// Create a context menu
const menu = createMenu({
  id: 'search',
  title: 'Search "%s"',
  contexts: ['selection'],
  onclick: (info) => console.log(info.selectionText),
});
registerMenus([menu]);

// Show a notification
await notify({ title: 'Done', message: 'Task complete' });

// Get current tab
const tab = await getActiveTab();

// Update the badge
setBadge({ text: '5', color: 'red' });

// Use offscreen document
await ensureOffscreen({ url: 'offscreen.html', reasons: ['AUDIO_PLAYBACK'] });
```

## What's Included

| Package | Key Exports |
|---------|-------------|
| [webext-context-menu](https://github.com/theluckystrike/webext-context-menu) | `createMenu`, `registerMenus`, `updateMenu`, `removeMenu`, `removeAllMenus`, `MenuItem` |
| [webext-notifications](https://github.com/theluckystrike/webext-notifications) | `notify`, `notifyBasic`, `notifyProgress`, `updateNotification`, `clearNotification` |
| [webext-tabs](https://github.com/theluckystrike/webext-tabs) | `getActiveTab`, `getAllTabs`, `openTab`, `closeTab`, `reloadTab`, `duplicateTab`, `moveTab` |
| [webext-badge](https://github.com/theluckystrike/webext-badge) | `setBadge`, `clearBadge`, `showCount`, `showStatus`, `flashBadge`, `COLORS` |
| [webext-offscreen](https://github.com/theluckystrike/webext-offscreen) | `ensureOffscreen`, `hasOffscreen`, `closeOffscreen`, `sendToOffscreen`, `createOffscreenHelper` |

## Or Install Individually

```bash
npm install @theluckystrike/webext-context-menu
npm install @theluckystrike/webext-notifications
npm install @theluckystrike/webext-tabs
npm install @theluckystrike/webext-badge
npm install @theluckystrike/webext-offscreen
```

## License

MIT

---

Built by [theluckystrike](https://github.com/theluckystrike) — [zovo.one](https://zovo.one)
