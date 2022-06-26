/**
 * Creates a new jQuery instance
 * @class [Jquery]
 */
class jQuery {
  /** @type {string | HTMLElement} selector - CSS Selector or DOM Element */
  selector;

  /** @param {string | HTMLElement} selector */
  constructor(selector) {
    this.selector = selector;
    this.init();
  }

  /**
   * Full initialization
   * @private
   */
  init() {
    this.initSelectorsContainer();
    initUtilsModule.call(this);
    initEventsModule.call(this);
    initAttributesModule.call(this);
    initMiscModule.call(this);
    initFilteringModule.call(this);
    initializeCSSModule.call(this);
  }

  /**
   * Initialize container of elements
   * @private
   */
  initSelectorsContainer() {
    this.container = new Set();

    if (typeof this.selector === 'string') {
      const elements = document.querySelectorAll(this.selector);
      for (const element of elements) {
        this.container.add(element);
      }
    } else if (this.selector instanceof HTMLElement) {
      this.container.add(this.selector);
    }
  }
}

const $ = cssSelector => new jQuery(cssSelector);
