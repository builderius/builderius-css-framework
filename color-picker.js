(function() {
  'use strict';

  // State management
  let originalPrimaryColor = null;
  let isPreviewMode = false;
  let debounceTimer = null;

  // DOM elements cache
  let colorPicker;
  let resetButton;
  let colorSwatches;

  /**
   * Convert hex to RGB
   * @param {string} hex - Hex color code
   * @returns {{r: number, g: number, b: number}} RGB values (0-1 range)
   */
  function hexToRGB(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255
    } : null;
  }

  /**
   * Convert RGB to linear RGB
   * @param {number} val - RGB value (0-1)
   * @returns {number} Linear RGB value
   */
  function toLinear(val) {
    return val <= 0.04045 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }

  /**
   * Convert linear RGB to XYZ (D65 illuminant)
   * @param {{r: number, g: number, b: number}} rgb - Linear RGB values
   * @returns {{x: number, y: number, z: number}} XYZ values
   */
  function rgbToXYZ(rgb) {
    const lr = toLinear(rgb.r);
    const lg = toLinear(rgb.g);
    const lb = toLinear(rgb.b);

    return {
      x: 0.4124564 * lr + 0.3575761 * lg + 0.1804375 * lb,
      y: 0.2126729 * lr + 0.7151522 * lg + 0.0721750 * lb,
      z: 0.0193339 * lr + 0.1191920 * lg + 0.9503041 * lb
    };
  }

  /**
   * Convert XYZ to OKLAB
   * @param {{x: number, y: number, z: number}} xyz - XYZ values
   * @returns {{l: number, a: number, b: number}} OKLAB values
   */
  function xyzToOKLAB(xyz) {
    const l = Math.cbrt(0.8189330101 * xyz.x + 0.3618667424 * xyz.y - 0.1288597137 * xyz.z);
    const m = Math.cbrt(0.0329845436 * xyz.x + 0.9293118715 * xyz.y + 0.0361456387 * xyz.z);
    const s = Math.cbrt(0.0482003018 * xyz.x + 0.2643662691 * xyz.y + 0.6338517070 * xyz.z);

    return {
      l: 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
      a: 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
      b: 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
    };
  }

  /**
   * Convert OKLAB to OKLCH
   * @param {{l: number, a: number, b: number}} lab - OKLAB values
   * @returns {{l: number, c: number, h: number}} OKLCH values
   */
  function oklabToOKLCH(lab) {
    const c = Math.sqrt(lab.a * lab.a + lab.b * lab.b);
    let h = Math.atan2(lab.b, lab.a) * 180 / Math.PI;
    if (h < 0) h += 360;

    return {
      l: lab.l,
      c: c,
      h: h
    };
  }

  /**
   * Convert hex color to OKLCH
   * @param {string} hex - Hex color code (e.g., "#5050ff")
   * @returns {{l: number, c: number, h: number}} OKLCH color object
   */
  function hexToOKLCH(hex) {
    const rgb = hexToRGB(hex);
    if (!rgb) return { l: 0.5, c: 0.15, h: 250 };

    const xyz = rgbToXYZ(rgb);
    const lab = xyzToOKLAB(xyz);
    return oklabToOKLCH(lab);
  }

  /**
   * Format OKLCH values to CSS oklch() string
   * @param {{l: number, c: number, h: number}} color - OKLCH color object
   * @returns {string} CSS oklch() string
   */
  function formatOKLCH(color) {
    return `oklch(${color.l.toFixed(4)} ${color.c.toFixed(4)} ${color.h.toFixed(2)})`;
  }

  /**
   * Update primary color CSS variable
   * @param {string} oklchString - CSS oklch() string
   */
  function updatePrimaryColor(oklchString) {
    console.log('Updating primary color to:', oklchString);
    document.documentElement.style.setProperty('--color--primary--original', oklchString);

    // Add preview mode class to swatches for visual effect
    colorSwatches.forEach(swatch => {
      swatch.classList.add('preview-mode');
    });
  }

  /**
   * Restore original primary color
   */
  function restoreOriginalColor() {
    console.log('Restoring original color:', originalPrimaryColor);
    if (originalPrimaryColor) {
      document.documentElement.style.setProperty('--color--primary--original', originalPrimaryColor);
    } else {
      document.documentElement.style.removeProperty('--color--primary--original');
    }

    // Remove preview mode class from swatches
    colorSwatches.forEach(swatch => {
      swatch.classList.remove('preview-mode');
    });
  }

  /**
   * Set preview mode UI state
   * @param {boolean} active - Whether preview mode is active
   */
  function setPreviewMode(active) {
    isPreviewMode = active;
    resetButton.disabled = !active;
  }

  /**
   * Handle color picker change event
   * @param {Event} event - Input change event
   */
  function handleColorChange(event) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const hexColor = event.target.value;
      console.log('Selected color:', hexColor);

      // Convert hex to OKLCH
      const oklchColor = hexToOKLCH(hexColor);
      console.log('OKLCH:', oklchColor);

      // Format as CSS string
      const oklchString = formatOKLCH(oklchColor);

      // Update CSS variable
      updatePrimaryColor(oklchString);

      // Activate preview mode
      setPreviewMode(true);
    }, 150);
  }

  /**
   * Handle reset button click
   */
  function handleReset() {
    console.log('Reset clicked');
    restoreOriginalColor();
    setPreviewMode(false);
    colorPicker.value = '#5050ff';
  }

  /**
   * Handle ESC key to reset
   * @param {KeyboardEvent} event
   */
  function handleKeyPress(event) {
    if (event.key === 'Escape' && isPreviewMode) {
      handleReset();
    }
  }

  /**
   * Store original primary color
   */
  function storeOriginalPrimaryColor() {
    const computedStyle = getComputedStyle(document.documentElement);
    originalPrimaryColor = computedStyle.getPropertyValue('--color--primary--original').trim();
    console.log('Stored original color:', originalPrimaryColor);
  }

  /**
   * Initialize color picker
   */
  function init() {
    console.log('Initializing color picker...');

    // Cache DOM elements
    colorPicker = document.getElementById('primary-color-picker');
    resetButton = document.getElementById('reset-colors');
    colorSwatches = document.querySelectorAll('.color-family .color-swatch[data-shade]');

    if (!colorPicker || !resetButton || colorSwatches.length === 0) {
      console.error('Required elements not found');
      return;
    }

    console.log('Elements found:', colorSwatches.length, 'swatches');

    // Store original color
    storeOriginalPrimaryColor();

    // Set up event listeners
    colorPicker.addEventListener('input', handleColorChange);
    colorPicker.addEventListener('change', handleColorChange);
    resetButton.addEventListener('click', handleReset);
    document.addEventListener('keydown', handleKeyPress);

    // Set initial value
    colorPicker.value = '#5050ff';

    console.log('Color picker initialized successfully');
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
