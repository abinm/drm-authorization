import _ from 'underscore';

import WishlistStrategy, { WishlistStrategyError } from '../strategy-types/WishlistStrategy';


export default class LocalWishlist extends WishlistStrategy {
  constructor(config) {
    super(config);

    this.items = {};
  }

  add(id, callback) {
    // process.nextTick emulates an asychronous task such as a network request.
    process.nextTick(() => {
      items[id] = true;
      console.log('add', id);

      callback(
        null,
        id
      );
    });
  }

  remove(id, callback) {
    process.nextTick(() => {
      if (items[id] == undefined) {
        callback(
          WishlistStrategyError.removedItemNotFound(id),
          null
        );
      }
      else {
        delete items[id];

        callback(
          null,
          id
        );
      }
    });
  }

  list(options, callback) {
    process.nextTick(() => {
      callback(
        null,
        _.keys(this.items)
      );
    });
  }
}
