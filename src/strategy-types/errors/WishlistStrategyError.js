export default class WishlistStrategyError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.stack = (new Error()).stack;
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }

  static removedItemNotFound(id) {
    return new WishlistStrategyError(`Wishlist item with id ${id} was not found or is invalid`, 404);
  }
}
