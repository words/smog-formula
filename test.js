import assert from 'node:assert'
import test from 'node:test'
import {smogFormula} from './index.js'

test('smogFormula', function () {
  // @ts-expect-error runtime.
  assert.ok(Number.isNaN(smogFormula()), 'NaN when an invalid value is given')
  assert.equal(round(smogFormula({sentence: 1})), 3.1291)
  assert.equal(
    round(smogFormula({sentence: 1, polysillabicWord: 4})),
    14.554_593
  )
})

/**
 * @param {number} value
 * @returns {number}
 */
function round(value) {
  return Math.round(value * 1e6) / 1e6
}
