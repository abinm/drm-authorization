import chai, { expect } from 'chai';
import _ from 'underscore';
import WishlistStrategy from '../lib/WishlistStrategy';
import LocalWishlist from '../lib/LocalWishlist';


describe('LocalWishlist methods', () => {
  it('LocalWishlist', () => {
    let localWishlist = new LocalWishlist();

    localWishlist.add(123, (error, result) => {
      expect(error).to.not.exist;
    });

    localWishlist.list({}, (error, ids) => {
      expect(ids).to.deep.equal([123]);
    });

    localWishlist.remove(123, (error, result) => {
      expect(error).to.not.exist;
    });

    localWishlist.remove(456, (error, result) => {
      expect(error).to.exist;
      expect(error).to.be.an.instanceOf(WishlistStrategyError);
    });

    localWishlist.list({}, (error, ids) => {
      expect(ids).to.deep.equal([]);
    });
  });
});


export default class InvalidWishlist extends WishlistStrategy {}

describe('Check invalid WishlistStrategy subclass', () => {
  it('create InvalidWishlist', () => {
    expect(() => {
      let a = new InvalidWishlist();
    }).to.throw(/Required method/);
  });
});
