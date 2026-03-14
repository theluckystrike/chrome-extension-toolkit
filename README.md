# chrome-extension-toolkit

All-in-one TypeScript toolkit for Chrome Manifest V3 extensions. One install gives you typed helpers for context menus, notifications, tabs, badge, and offscreen documents.

## Install

```bash
npm install @theluckystrike/chrome-extension-toolkit
```

## Quick Start

```typescript
import {
  createMenu, registerMenus,
  notify,
  getActiveTab, openTab,
  setBadge, clearBadge,
  ensureOffscreen, sendToOffscreen,
} from "@theluckystrike/chrome-extension-toolkit";

// Context menu
registerMenus([
  createMenu({
    id: "search",
    title: 'Search "%s"',
    contexts: ["selection"],
    onclick: (info) => console.log(info.selectionText),
  }),
]);

// Notification
await notify({ title: "Done", message: "Task complete" });

// Tabs
const tab = await getActiveTab();
await openTab("https://example.com");

// Badge
setBadge({ text: "5", color: "red" });

// Offscreen document
await ensureOffscreen({ url: "offscreen.html", reasons: ["AUDIO_PLAYBACK"] });
```

## Included Packages

| Package | Description |
| --- | --- |
| [webext-context-menu](https://github.com/theluckystrike/webext-context-menu) | Create, update, and remove context menus |
| [webext-notifications](https://github.com/theluckystrike/webext-notifications) | Basic, image, list, and progress notifications |
| [webext-tabs](https://github.com/theluckystrike/webext-tabs) | Query, open, close, reload, duplicate, and move tabs |
| [webext-badge](https://github.com/theluckystrike/webext-badge) | Set text, color, counts, status indicators, and flash effects |
| [webext-offscreen](https://github.com/theluckystrike/webext-offscreen) | Manage offscreen documents and bidirectional messaging |

Each package is also available standalone:

```bash
npm install @theluckystrike/webext-context-menu
npm install @theluckystrike/webext-notifications
npm install @theluckystrike/webext-tabs
npm install @theluckystrike/webext-badge
npm install @theluckystrike/webext-offscreen
```

## Features

- TypeScript-first with full type exports for every API
- Targets Chrome Manifest V3 (service worker compatible)
- Tree-shakeable ESM and CJS builds via tsup
- Zero runtime dependencies beyond the five webext packages
- Each sub-package works independently or through this umbrella

## License

MIT -- see [LICENSE](LICENSE).
