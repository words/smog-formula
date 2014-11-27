# smog-formula [![Build Status](https://img.shields.io/travis/wooorm/smog-formula.svg?style=flat)](https://travis-ci.org/wooorm/smog-formula) [![Coverage Status](https://img.shields.io/coveralls/wooorm/smog-formula.svg?style=flat)](https://coveralls.io/r/wooorm/smog-formula?branch=master)

Formula to detect the ease of reading a text according to the [SMOG (Simple Measure of Gobbledygook) formula](http://en.wikipedia.org/wiki/SMOG).

See [syllable](https://github.com/wooorm/syllable) for detecting syllables.

## Installation

npm:
```sh
$ npm install smog-formula
```

Component:
```sh
$ component install wooorm/smog-formula
```

Bower:
```sh
$ bower install smog-formula
```

## Usage

```js
var smogFormula = require('smog-formula');

/**
 * For “The Australian platypus is seemingly a hybrid of
 * a mammal and reptilian creature.” (1 sentence; 4
 * polysillabic words).
 */

smogFormula({
    'sentence' : 1,
    'polysillabicWord' : 4
});
// 14.554593...
```

## API

### smogFormula(counts)

Given an object containing the number of sentences (`sentence`) and the number of polysillabic (three or more syllables) words (`polysillabicWord`) in a document, returns the reading ease associated with the document.

## Related

- [automated-readability](https://github.com/wooorm/automated-readability) — Uses character count instead of an error-prone syllable parser;
- [coleman-liau](https://github.com/wooorm/coleman-liau) — Uses letter count instead of an error-prone syllable parser;
- [dale-chall-formula](https://github.com/wooorm/dale-chall-formula) — Uses a dictionary; suited for higher reading levels;
- [flesch](https://github.com/wooorm/flesch) — Uses syllable count;
- [flesch-kincaid](https://github.com/wooorm/flesch-kincaid) — Like **flesch-formula**; returns U.S. grade levels;
- [gunning-fog](https://github.com/wooorm/gunning-fog) — Uses syllable count; hard to implement with a computer (needs POS-tagging and Named Entity Recognition);
- [spache-formula](https://github.com/wooorm/spache-formula) — Uses a dictionary; suited for lower reading levels.

## License

MIT © [Titus Wormer](http://wooorm.com)
