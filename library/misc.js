/**
 * Initialize miscellaneous API features
 */
function initMiscModule() {

  /**
   * Iterate over object
   * @param {Function} cb
   * @memberOf jQuery#
   * @returns {jQuery}
   */
  this.each = function each(cb) {
    for (const [index, el] of Array.from(this.container).entries()) {
      const result = cb.call(el, index, el)
      if (result === false) {
        break;
      }
    }
    return this;
  }
}
