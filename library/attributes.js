/**
 * Initialize attributes API features
 */
function initAttributesModule() {

  /**
   * Add class or classes
   * @param {string|string[]|Function} className
   * @memberOf jQuery#
   * @returns {initAttributesModule}
   */
  this.addClass = function addClass(className) {

    /**
     * Prepare classes
     * @param {string|string[]} className
     * @memberOf jQuery#
     * @returns {string[]|*}
     */
    function parseClassNames(className) {
      if (typeof className === 'string') {
        return className.split(' ');
      }
      return className;
    }

    for (const [index, el] of Array.from(this.container).entries()) {
      if (this.isFunction(className)) {
        const classes = className(index, el.classList.value);
        el.classList.add(classes);
      } else {
        const classes = parseClassNames(className);
        el.classList.add(...classes);
      }
    }
    return this;
  }

  /**
   * Check if element has a className
   * @param {string} className
   * @memberOf jQuery#
   * @returns {boolean}
   */
  this.hasClass = function hasClass(className) {
    for (const el of this.container) {
      if (el.classList.contains(className)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Get or set attributes
   * @param {string} attr
   * @param {string|undefined|Function} value
   * @memberOf jQuery#
   * @returns {jQuery|*}
   */
  this.attr = function attr(attr, value) {
    if (attr) {
      if (typeof attr === 'string') {
        if (value === undefined) {
          return Array.from(this.container)[0].getAttribute(attr);
        }
        for (const [index, el] of Array.from(this.container).entries()) {
          this.isFunction(value) ? value(index, el.getAttribute(attr)) : el.setAttribute(attr, value);
        }
      } else if (this.isObject(attr)) {
        const entries = Object.entries(attr);
        for (const el of this.container) {
          for (let i = 0; i < entries.length; i++) {
            el.setAttribute(entries[i][0], entries[i][1]);
          }
        }
      }
      return this;
    } else {
      throw new SyntaxError('Attribute name is not exist');
    }
  }

  /**
   * Get or set html of element
   * @param {string|Function|undefined} htmlContent
   * @memberOf jQuery#
   * @returns {jQuery|*}
   */
  this.html = function html(htmlContent) {
    if (!htmlContent === undefined) {
      return Array.from(this.container)[0].innerHTML;
    }

    for (const [index, el] of Array.from(this.container).entries()) {
      el.innerHTML = this.isFunction(htmlContent) ? htmlContent(index, el.innerHTML) : htmlContent;
    }
    return this;
  }

  /**
   * Get or set textContent of element
   * @param {string|Function|undefined} textContent
   * @returns {jQuery|*}
   */
  this.text = function text(textContent) {
    if (textContent === undefined) {
      const contents = Array.from(this.container).map((el) => el.textContent);
      return contents.join(' ');
    }

    for (const [index, el] of Array.from(this.container).entries()) {
      el.textContent = this.isFunction(textContent) ? textContent(index, el.textContent, el) : textContent;
    }
    return this;
  }
}
