# smog-formula [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Formula to detect the grade level of text according to the
[SMOG (Simple Measure of Gobbledygook) formula][formula].

See [syllable][] for detecting syllables.

## Installation

[npm][]:

```bash
npm install smog-formula
```

## Usage

```js
var smogFormula = require('smog-formula');

/* For “The Australian platypus is seemingly a hybrid of
 * a mammal and reptilian creature.” (1 sentence; 4
 * polysillabic words). */
smogFormula({
  sentence: 1,
  polysillabicWord: 4
}); //=> 14.554593...
```

## API

### `smogFormula(counts)`

Given an object containing the number of sentences
(`sentence`) and the number of polysillabic (three or
more syllables) words (`polysillabicWord`) in a document,
returns the reading ease associated with the document.

## Related

*   [`automated-readability`](https://github.com/wooorm/automated-readability)
    — Uses character count instead of error-prone syllable parser
*   [`coleman-liau`](https://github.com/wooorm/coleman-liau)
    — Uses letter count instead of an error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/wooorm/dale-chall-formula)
    — Uses a dictionary, suited for higher reading levels
*   [`flesch`](https://github.com/wooorm/flesch)
    — Uses syllable count
*   [`flesch-kincaid`](https://github.com/wooorm/flesch-kincaid)
    — Like `flesch`, returns U.S. grade levels
*   [`gunning-fog`](https://github.com/wooorm/gunning-fog)
    — Uses syllable count, needs POS-tagging and NER
*   [`spache-formula`](https://github.com/wooorm/spache-formula)
    — Uses a dictionary, suited for lower reading levels

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/words/smog-formula.svg

[travis]: https://travis-ci.org/words/smog-formula

[codecov-badge]: https://img.shields.io/codecov/c/github/words/smog-formula.svg

[codecov]: https://codecov.io/github/words/smog-formula

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[formula]: http://en.wikipedia.org/wiki/SMOG

[syllable]: https://github.com/words/syllable
