/**
 * Customizer Panel
 * Manages the floating customizer panel with theme switcher and color picker controls
 */

(function() {
  'use strict';

  // Storage key for panel state
  const STORAGE_KEY = 'builderius-customizer-state';

  // DOM elements
  let panel;
  let toggleButton;
  let closeButton;
  let customizerContent;

  /**
   * Get saved panel state from localStorage
   * @returns {boolean} - True if panel should be collapsed
   */
  function getSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'collapsed';
    } catch (e) {
      console.warn('Could not access localStorage:', e);
      return false;
    }
  }

  /**
   * Save panel state to localStorage
   * @param {boolean} collapsed - Whether panel is collapsed
   */
  function saveState(collapsed) {
    try {
      localStorage.setItem(STORAGE_KEY, collapsed ? 'collapsed' : 'expanded');
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  }

  /**
   * Set panel collapsed state
   * @param {boolean} collapsed - Whether panel should be collapsed
   * @param {boolean} announce - Whether to announce to screen readers
   */
  function setPanelState(collapsed, announce = true) {
    panel.dataset.collapsed = collapsed.toString();
    toggleButton.setAttribute('aria-expanded', (!collapsed).toString());

    // Save state
    saveState(collapsed);

    // Announce to screen readers
    if (announce) {
      announceState(collapsed);
    }
  }

  /**
   * Toggle panel open/closed
   */
  function togglePanel() {
    const isCollapsed = panel.dataset.collapsed === 'true';
    setPanelState(!isCollapsed);
  }

  /**
   * Close panel
   */
  function closePanel() {
    setPanelState(true);
    // Return focus to toggle button for accessibility
    toggleButton.focus();
  }

  /**
   * Open panel
   */
  function openPanel() {
    setPanelState(false);
  }

  /**
   * Announce panel state to screen readers
   * @param {boolean} collapsed - Whether panel is collapsed
   */
  function announceState(collapsed) {
    const message = collapsed
      ? 'Customization panel closed'
      : 'Customization panel opened';

    // Create temporary live region for announcement
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  /**
   * Handle keyboard shortcuts
   * @param {KeyboardEvent} e - Keyboard event
   */
  function handleKeyboard(e) {
    // ESC key - close panel
    if (e.key === 'Escape' && panel.dataset.collapsed === 'false') {
      e.preventDefault();
      closePanel();
      return;
    }

    // Ctrl/Cmd + K - toggle panel
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      togglePanel();
      return;
    }
  }

  /**
   * Handle outside clicks on mobile
   * @param {MouseEvent} e - Click event
   */
  function handleOutsideClick(e) {
    // Only on mobile (when panel is full-width drawer)
    if (window.innerWidth >= 640) return;

    // If panel is open and click is outside
    if (panel.dataset.collapsed === 'false' && !panel.contains(e.target)) {
      closePanel();
    }
  }

  /**
   * Handle window resize
   */
  function handleResize() {
    // No special handling needed - CSS handles responsive behavior
    // This is here in case we need to add resize logic later
  }

  /**
   * Initialize the customizer panel
   */
  function init() {
    // Cache DOM elements
    panel = document.getElementById('customizer-panel');
    toggleButton = document.getElementById('customizer-toggle');
    closeButton = panel?.querySelector('.customizer-close');
    customizerContent = document.getElementById('customizer-content');

    // Validate required elements
    if (!panel || !toggleButton || !closeButton || !customizerContent) {
      console.error('Customizer panel: Required elements not found');
      return;
    }

    // Restore saved state
    const isCollapsed = getSavedState();
    setPanelState(isCollapsed, false); // Don't announce on initial load

    // Event listeners
    toggleButton.addEventListener('click', togglePanel);
    closeButton.addEventListener('click', closePanel);
    document.addEventListener('keydown', handleKeyboard);
    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('resize', handleResize);

    // Add sr-only class for screen reader announcements if not present
    if (!document.querySelector('style[data-customizer-styles]')) {
      const style = document.createElement('style');
      style.dataset.customizerStyles = '';
      style.textContent = `
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `;
      document.head.appendChild(style);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
