/**
 * @typedef Counts
 *   Counts from input document.
 * @property {number} sentence
 *   Number of sentences.
 * @property {number} [polysillabicWord]
 *   Number of of polysillabic (three or more syllables) words.
 */

/**
 * @typedef {Counts} SmogFormulaCounts
 *   Deprecated: please use the `Counts` type instead.
 */

const sentenceSize = 30
const weight = 1.043
const base = 3.1291

/**
 * Given an object containing the number of sentences (`sentence`) and the
 * number of polysillabic (three or more syllables) words (`polysillabicWord`)
 * in a document, returns the reading ease associated with the document.
 *
 * @param {Counts} counts
 *   Counts from input document.
 * @returns {number}
 *   Reading ease associated with the document.
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
