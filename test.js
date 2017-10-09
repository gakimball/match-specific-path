/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const match = require('.');

const paths = ['b/c', 'b', 'a'];

describe('match()', () => {
  it('returns undefined for non-matches', () => {
    expect(match(paths, 'c')).to.be.undefined;
  });

  it('returns a matching path', () => {
    expect(match(paths, 'b')).to.equal('b');
  });

  it('returns a more specific matching path', () => {
    expect(match(paths, 'b/c')).to.equal('b/c');
  });

  it('returns an even more specific matching path', () => {
    expect(match(paths, 'b/c/d/e')).to.equal('b/c');
  });
});
