'use strict';

module.exports = smog;

var SENTENCE_SIZE = 30;
var WEIGHT = 1.0430;
var BASE = 3.1291;

/* Get the grade level of a given value according to the
 * SMOG formula.  More information is available at
 * WikiPedia: See http://en.wikipedia.org/wiki/SMOG. */
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
