'use strict';

/**
 * Constants.
 */

var SENTENCE_SIZE,
    WEIGHT,
    BASE;

SENTENCE_SIZE = 30;
WEIGHT = 1.0430;
BASE = 3.1291;

/**
 * Get the grade level of a given value according to the SMOG formula.
 * More information is available at WikiPedia:
 *
 *   http://en.wikipedia.org/wiki/SMOG
 *
 * @param {Object} counts
 * @param {number} counts.sentence - Number of sentences.
 * @param {number} counts.polysillabicWord - Number of polysillabic words
 *   (three or more syllables).
 * @return {number}
 */

function smog(counts) {
    if (!counts || !counts.sentence) {
        return NaN;
    }

    return WEIGHT * Math.sqrt(
            (counts.polysillabicWord || 0) * (SENTENCE_SIZE / counts.sentence)
        ) + BASE;
}

/**
 * Export `smog`.
 */

module.exports = smog;
