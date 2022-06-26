/**
 * Initialize CSS API features
 */
function initializeCSSModule() {
  /**
   * Get or set Css
   * @param {string} propertyName
   * @param {string|undefined} value
   * @memberOf jQuery#
   * @returns {jQuery}
   */
  this.css = function css(propertyName, value) {
    if (value === undefined) {
      const el = Array.from(this.container)[0];
      return el.style[propertyName];
    }
    for (const el of this.container) {
      el.style[propertyName] = value;
    }
    return this;
  }
}
