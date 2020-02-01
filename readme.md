# smog-formula

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Formula to detect the grade level of text according to the [SMOG (simple measure
of gobbledygook) formula][formula].

See [`syllable`][syllable] for detecting syllables.

## Install

[npm][]:

```sh
npm install smog-formula
```

## Use

```js
var smogFormula = require('smog-formula')

// For “The Australian platypus is seemingly a hybrid of a mammal and reptilian
// creature.” (1 sentence; 4 polysillabic words).
smogFormula({sentence: 1, polysillabicWord: 4})
// => 14.554593…
```

## API

### `smogFormula(counts)`

Given an object containing the number of sentences (`sentence`) and the number
of polysillabic (three or more syllables) words (`polysillabicWord`) in a
document, returns the reading ease associated with the document.

## Related

*   [`automated-readability`](https://github.com/words/automated-readability)
    — Uses character count instead of error-prone syllable parser
*   [`coleman-liau`](https://github.com/words/coleman-liau)
    — Uses letter count instead of an error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/words/dale-chall-formula)
    — Uses a dictionary, suited for higher reading levels
*   [`flesch`](https://github.com/words/flesch)
    — Uses syllable count
*   [`flesch-kincaid`](https://github.com/words/flesch-kincaid)
    — Like `flesch`, returns U.S. grade levels
*   [`gunning-fog`](https://github.com/words/gunning-fog)
    — Uses syllable count, needs POS-tagging and NER
*   [`spache-formula`](https://github.com/words/spache-formula)
    — Uses a dictionary, suited for lower reading levels

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/smog-formula.svg

[build]: https://travis-ci.org/words/smog-formula

[coverage-badge]: https://img.shields.io/codecov/c/github/words/smog-formula.svg

[coverage]: https://codecov.io/github/words/smog-formula

[downloads-badge]: https://img.shields.io/npm/dm/smog-formula.svg

[downloads]: https://www.npmjs.com/package/smog-formula

[size-badge]: https://img.shields.io/bundlephobia/minzip/smog-formula.svg

[size]: https://bundlephobia.com/result?p=smog-formula

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[formula]: https://en.wikipedia.org/wiki/SMOG

[syllable]: https://github.com/words/syllable
