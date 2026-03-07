// webext-context-menu
export {
  type ContextType,
  type ClickHandler as MenuClickHandler,
  type MenuItemOptions,
  MenuItem,
  createMenu,
  createSeparator,
  registerMenus,
  updateMenu,
  removeMenu,
  removeAllMenus,
} from '@theluckystrike/webext-context-menu';

// webext-notifications
export {
  type NotificationType,
  type ClickHandler as NotificationClickHandler,
  type ButtonClickHandler,
  type CloseHandler,
  type NotificationButton,
  type NotificationItem,
  type NotifyOptions,
  notify,
  notifyBasic,
  notifyProgress,
  updateNotification,
  clearNotification,
  clearAllHandlers as clearAllNotificationHandlers,
} from '@theluckystrike/webext-notifications';

// webext-tabs
export {
  type TabInfo,
  getActiveTab,
  getActiveTabUrl,
  getAllTabs,
  getTabsInWindow,
  getPinnedTabs,
  getTabsByUrl,
  getTabById,
  openTab,
  openOrFocusTab,
  closeTab,
  closeTabs,
  reloadTab,
  duplicateTab,
  moveTab,
  sendMessageToTab,
} from '@theluckystrike/webext-tabs';

// webext-badge
export {
  type BadgeColor,
  type ColorName,
  type BadgeState,
  COLORS,
  setBadgeText,
  getBadgeText,
  setBadgeColor,
  getBadgeColor,
  setBadgeTextColor,
  setBadge,
  clearBadge,
  showCount,
  showStatus,
  flashBadge,
} from '@theluckystrike/webext-badge';

// webext-offscreen
export {
  type OffscreenReason,
  type OffscreenConfig,
  type OffscreenMessage,
  type OffscreenResponse,
  ensureOffscreen,
  hasOffscreen,
  closeOffscreen,
  sendToOffscreen,
  onOffscreenMessage,
  setupOffscreenListener,
  createOffscreenHelper,
  removeHandler as removeOffscreenHandler,
  clearHandlers as clearOffscreenHandlers,
} from '@theluckystrike/webext-offscreen';
