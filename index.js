/**
 * @typedef {Object} SmogFormulaCounts
 * @property {number} sentence
 * @property {number} [polysillabicWord]
 */

const sentenceSize = 30
const weight = 1.043
const base = 3.1291

/**
 * Get the grade level of a given value according to the SMOG formula. More information is available at WikiPedia: <https://en.wikipedia.org/wiki/SMOG>.
 *
 * @param {SmogFormulaCounts} counts
 * @returns {number}
 */
export function smogFormula(counts) {
  if (!counts || !counts.sentence) {
    return Number.NaN
  }

  return (
    base +
    weight *
      Math.sqrt(
        (counts.polysillabicWord || 0) * (sentenceSize / counts.sentence)
      )
  )
}
