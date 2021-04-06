import test from 'tape'
import {smogFormula} from './index.js'

test('smogFormula', function (t) {
  t.ok(Number.isNaN(smogFormula()), 'NaN when an invalid value is given')
  t.equal(round(smogFormula({sentence: 1})), 3.1291)
  t.equal(round(smogFormula({sentence: 1, polysillabicWord: 4})), 14.554593)
  t.end()
})

function round(value) {
  return Math.round(value * 1e6) / 1e6
}
