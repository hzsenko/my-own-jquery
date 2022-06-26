/**
 * Initialize utils module
 */

function initUtilsModule() {
  /**
   * Check if arg is a function
   * @param {*} arg
   * @memberOf jQuery#
   * @returns {boolean}
   */
  this.isFunction = function isFunction(arg) {
    return arg && {}.toString.call(arg) === '[object Function]';
  }

  /**
   * Check if arg is an object
   * @param {*} arg
   * @memberOf jQuery#
   * @returns {boolean}
   */
  this.isObject = function isObject(arg) {
    return arg && {}.toString.call(arg) === '[object Object]';
  }

  /**
   * Check if arg is an array
   * @param {*} arg
   * @memberOf jQuery#
   * @returns {boolean}
   */
  this.isArray = function isArray(arg) {
    return Array.isArray(arg);
  }
}
