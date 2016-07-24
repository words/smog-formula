/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module smog-formula
 * @fileoverview Test suite for `smog-formula`.
 */

'use strict';

/* Dependencies. */
var test = require('tape');
var nan = require('is-nan');
var smog = require('./');

/* Formula. */
test('daleChall', function (t) {
  t.ok(nan(smog()), 'NaN when an invalid value is given');

  t.equal(
    round(smog({sentence: 1})),
    3.1291
  );

  t.equal(
    round(smog({sentence: 1, polysillabicWord: 4})),
    14.554593
  );

  t.end();
});

function round(val) {
  return Math.round(val * 1e6) / 1e6;
}
