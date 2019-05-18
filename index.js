'use strict'

module.exports = smog

var sentenceSize = 30
var weight = 1.043
var base = 3.1291

// Get the grade level of a given value according to the SMOG formula.
// More information is available at WikiPedia:
// <https://en.wikipedia.org/wiki/SMOG>
function smog(counts) {
  if (!counts || !counts.sentence) {
    return NaN
  }

  return (
    base +
    weight *
      Math.sqrt(
        (counts.polysillabicWord || 0) * (sentenceSize / counts.sentence)
      )
  )
}
