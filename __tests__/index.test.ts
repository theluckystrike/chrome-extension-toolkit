import { describe, it, expect } from 'vitest';
import * as toolkit from '../src/index';

describe('chrome-extension-toolkit re-exports', () => {
  // webext-context-menu
  it('re-exports context menu functions', () => {
    expect(toolkit.createMenu).toBeDefined();
    expect(typeof toolkit.createMenu).toBe('function');
    expect(toolkit.createSeparator).toBeDefined();
    expect(toolkit.registerMenus).toBeDefined();
    expect(toolkit.updateMenu).toBeDefined();
    expect(toolkit.removeMenu).toBeDefined();
    expect(toolkit.removeAllMenus).toBeDefined();
    expect(toolkit.MenuItem).toBeDefined();
  });

  // webext-notifications
  it('re-exports notification functions', () => {
    expect(toolkit.notify).toBeDefined();
    expect(typeof toolkit.notify).toBe('function');
    expect(toolkit.notifyBasic).toBeDefined();
    expect(toolkit.notifyProgress).toBeDefined();
    expect(toolkit.updateNotification).toBeDefined();
    expect(toolkit.clearNotification).toBeDefined();
    expect(toolkit.clearAllNotificationHandlers).toBeDefined();
  });

  // webext-tabs
  it('re-exports tab functions', () => {
    expect(toolkit.getActiveTab).toBeDefined();
    expect(typeof toolkit.getActiveTab).toBe('function');
    expect(toolkit.getActiveTabUrl).toBeDefined();
    expect(toolkit.getAllTabs).toBeDefined();
    expect(toolkit.getTabsInWindow).toBeDefined();
    expect(toolkit.getPinnedTabs).toBeDefined();
    expect(toolkit.getTabsByUrl).toBeDefined();
    expect(toolkit.getTabById).toBeDefined();
    expect(toolkit.openTab).toBeDefined();
    expect(toolkit.openOrFocusTab).toBeDefined();
    expect(toolkit.closeTab).toBeDefined();
    expect(toolkit.closeTabs).toBeDefined();
    expect(toolkit.reloadTab).toBeDefined();
    expect(toolkit.duplicateTab).toBeDefined();
    expect(toolkit.moveTab).toBeDefined();
    expect(toolkit.sendMessageToTab).toBeDefined();
  });

  // webext-badge
  it('re-exports badge functions', () => {
    expect(toolkit.setBadge).toBeDefined();
    expect(typeof toolkit.setBadge).toBe('function');
    expect(toolkit.setBadgeText).toBeDefined();
    expect(toolkit.getBadgeText).toBeDefined();
    expect(toolkit.setBadgeColor).toBeDefined();
    expect(toolkit.getBadgeColor).toBeDefined();
    expect(toolkit.setBadgeTextColor).toBeDefined();
    expect(toolkit.clearBadge).toBeDefined();
    expect(toolkit.showCount).toBeDefined();
    expect(toolkit.showStatus).toBeDefined();
    expect(toolkit.flashBadge).toBeDefined();
    expect(toolkit.COLORS).toBeDefined();
  });

  // webext-offscreen
  it('re-exports offscreen functions', () => {
    expect(toolkit.ensureOffscreen).toBeDefined();
    expect(typeof toolkit.ensureOffscreen).toBe('function');
    expect(toolkit.hasOffscreen).toBeDefined();
    expect(toolkit.closeOffscreen).toBeDefined();
    expect(toolkit.sendToOffscreen).toBeDefined();
    expect(toolkit.onOffscreenMessage).toBeDefined();
    expect(toolkit.setupOffscreenListener).toBeDefined();
    expect(toolkit.createOffscreenHelper).toBeDefined();
    expect(toolkit.removeOffscreenHandler).toBeDefined();
    expect(toolkit.clearOffscreenHandlers).toBeDefined();
  });

  it('exports expected number of runtime values', () => {
    const exports = Object.keys(toolkit);
    // Should have a reasonable number of exports (functions + constants)
    expect(exports.length).toBeGreaterThanOrEqual(40);
  });
});
