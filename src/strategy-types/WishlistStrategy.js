import Strategy from './Strategy';
export { default as WishlistStrategyError } from './errors/WishlistStrategyError';


export default class WishlistStrategy extends Strategy {
  /**
   * Set required methods that subclasses must override.
   *
   * @return {array} Array of method names.
   */
  static get requiredMethods() {
    return [
      'add',
      'remove',
      'list'
    ];
  }

  static get abstractClass() {
    return WishlistStrategy;
  }

  /**
   * Add an item uniquely to the wishlist.
   *
   * @param {string} id The item’s identifier
   */
  add(id, callback) {
    throw new Error('WishlistStrategy#add must be implemented by subclass');
  }

  /**
   * Remove an item from the wishlist.
   *
   * @param {string} id The item’s identifier
   * @param {function} callback Node style (error, result) callback
   */
  remove(id, callback) {
    throw new Error('WishlistStrategy#remove must be implemented by subclass');
  }

  /**
   * List all items in the wishlist.
   *
   * @param {object} options Optional parameters for pagination, etc
   * @return {array} Array of method names.
   */
  list(options) {
    throw new Error('WishlistStrategy#list must be implemented by subclass');
  }
}
