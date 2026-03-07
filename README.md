# Chrome Extension Toolkit

A comprehensive, curated ecosystem for building modern, Manifest V3 compliant Chrome Extensions. 

This repository serves as the single entry point to a suite of starter templates, helper packages, and deep-dive documentation produced by [theluckystrike](https://github.com/theluckystrike). 

Whether you are looking to build a dead-simple popup script or a complex Svelte application injected into existing web pages, you will find the right starting point here.

## 📚 The Definitive Guide

Before you build, understand the architecture. **[The Chrome Extension Guide](https://github.com/theluckystrike/chrome-extension-guide)** is a collection of 230+ meticulously reviewed articles covering Manifest V3, permissions, API deep dives, and complex publishing requirements. 

## 🚀 Starter Templates

Ten distinct, ready-to-use boilerplate repositories. Clone them, `npm install`, and start building immediately.

### Framework Starters
- **[React Starter](https://github.com/theluckystrike/chrome-extension-react-starter)**: React 18, TypeScript, Vite, Tailwind.
- **[Svelte Starter](https://github.com/theluckystrike/chrome-extension-svelte-starter)**: Svelte 4, TypeScript, Vite, Tailwind.
- **[Vue Starter](https://github.com/theluckystrike/chrome-extension-vue-starter)**: Vue 3, TypeScript, Vite, Tailwind.

### Focused Starters
Built with pure TypeScript and sub-second `esbuild` configurations.
- **[Vanilla TS Starter](https://github.com/theluckystrike/chrome-extension-vanilla-ts-starter)**: The pure TypeScript baseline.
- **[Content Script Starter](https://github.com/theluckystrike/chrome-extension-content-script-starter)**: Focused purely on DOM injection.
- **[Popup Starter](https://github.com/theluckystrike/chrome-extension-popup-starter)**: Focused purely on the extension popup UI.
- **[DevTools Starter](https://github.com/theluckystrike/chrome-extension-devtools-starter)**: Scaffolded for custom Chrome Developer Tools panels.
- **[Side Panel Starter](https://github.com/theluckystrike/chrome-extension-side-panel-starter)**: Scaffolded for the new `chrome.sidePanel` persistent UI standard.

### Specialized Starters
- **[Full-Stack Starter](https://github.com/theluckystrike/chrome-extension-full-stack)**: The kitchen sink. Svelte, Vite, Tailwind, Background messaging, injected UIs, and Storage Sync APIs all configured to work together perfectly.
- **[Minimal MV3](https://github.com/theluckystrike/chrome-extension-mv3-minimal)**: Pure HTML/JS/CSS. No bundler. The absolute bare minimum Manifest V3 extension.

## 📦 Helper Packages

We maintain several npm packages designed to abstract away the most painful aspects of Chrome Extension development:

- **[webext-storage](https://github.com/theluckystrike/webext-storage)**: A promised-based, strongly-typed wrapper around `chrome.storage` that handles serialization and quota limits.
- **[webext-messaging](https://github.com/theluckystrike/webext-messaging)**: A robust messaging bridge between your background scripts, content scripts, and UI layers.
- **[webext-permissions](https://github.com/theluckystrike/webext-permissions)**: Simplified request patterns for optional host permissions and API features.

*(Note: These packages are hosted within the theluckystrike namespace and are built for TypeScript developers).*

## 💰 The Monetization Playbook

Building a great extension is only the first half of the journey. For insights on launching, acquiring users, handling Stripe payments directly within an extension, and navigating the Chrome Web Store review process, refer to the documentation in **[The Chrome Extension Guide](https://github.com/theluckystrike/chrome-extension-guide)**.

---
Built by theluckystrike / [zovo.one](https://zovo.one)
