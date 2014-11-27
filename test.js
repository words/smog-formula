'use strict';

/**
 * Dependencies.
 */

var smogFormula,
    assert;

smogFormula = require('./');
assert = require('assert');

/**
 * Utilities.
 */

function roundAssert(a, b) {
    assert(Math.round(a * 1000000) === Math.round(b * 1000000));
}

/**
 * Tests.
 */

describe('smogFormula()', function () {
    it('should be of type `function`', function () {
        assert(typeof smogFormula === 'function');
    });

    it('should work', function () {
        var result;

        /**
         * Return NaN when an invalid value is given.
         */

        result = smogFormula();

        assert(result !== result);

        /**
         * For a sentence without polysillabic words.
         */

        roundAssert(smogFormula({
            'sentence': 1
        }), 3.1291);

        /**
         * For “The Australian platypus is seemingly a hybrid of
         * a mammal and reptilian creature.”
         *
         * Sentences: 1
         * Polysillabic: 4 (Australian, platypus, seemingly, reptilian)
         */

        roundAssert(smogFormula({
            'sentence': 1,
            'polysillabicWord': 4
        }), 14.554593);
    });
});
