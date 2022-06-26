/**
 * Initialize events API features
 */
function initEventsModule() {
  /**
   * Attach click event or trigger
   * @param {Function} [handler] - callback
   * @memberOf jQuery#
   * @returns {jQuery}
   */
  this.click = function click(handler) {
    for (const el of this.container) {
      handler === undefined ? el.click() : el.addEventListener('click', handler);
    }
    return this;
  }

  /**
   * Attach event listener
   * @param {string} name
   * @param {Function} handler
   * @memberOf jQuery#
   * @returns {jQuery}
   */
  this.on = function on(name, handler) {
    for (const el of this.container) {
      el.addEventListener(name, handler);
    }
    return this;
  }
}
