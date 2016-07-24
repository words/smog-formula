/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module smog-formula
 * @fileoverview Detect ease of reading according to the
 *   the SMOG (Simple Measure of Gobbledygook) formula (1969).
 */

'use strict';

/* Expose. */
module.exports = exports = smog;

/* Constants. */
var SENTENCE_SIZE = 30;
var WEIGHT = 1.0430;
var BASE = 3.1291;

/**
 * Get the grade level of a given value according to the
 * SMOG formula.  More information is available at
 * WikiPedia:
 *
 *   http://en.wikipedia.org/wiki/SMOG
 *
 * @param {Object} counts
 * @param {number} counts.sentence - Number of sentences.
 * @param {number} counts.polysillabicWord - Number of
 *   polysillabic words (three or more syllables).
 * @return {number}
 */
function smog(counts) {
  if (!counts || !counts.sentence) {
    return NaN;
  }

  return BASE +
    (
      WEIGHT *
      Math.sqrt(
        (counts.polysillabicWord || 0) *
        (SENTENCE_SIZE / counts.sentence)
      )
    );
}
