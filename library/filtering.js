/**
 * Initialize filtering API features
 */
function initFilteringModule() {

  /**
   * Check if element is selector
   * @param {string} selector
   * @returns {boolean}
   */
  this.is = function is(selector) {
    const elements = Array.from(document.querySelectorAll(selector));
    const container = Array.from(this.container);

    for (const el of container) {
      if (!elements.includes(el)) {
        return false;
      }
    }
    return true;
  }
}
