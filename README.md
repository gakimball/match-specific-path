# match-specific-path

> Find the most specific matching path in a list

[![Travis](https://img.shields.io/travis/gakimball/match-specific-path.svg?maxAge=2592000)](https://travis-ci.org/gakimball/match-specific-path) [![npm](https://img.shields.io/npm/v/match-specific-path.svg?maxAge=2592000)](https://www.npmjs.com/package/match-specific-path)

## Installation

```bash
npm install match-specific-path
```

## Usage

```js
const matchPath = require('match-specific-path');
const paths = ['a', 'b', 'b/c'];

// /b is the most specific match
matchPath(paths, 'b'); // => 'b'

// /b/c is the most specific match
matchPath(paths, 'b/c/d'); // => 'b/c'

// /b is the most specific path
matchPath(paths, 'b/e/f/g'); // => 'b'

// No match!
matchPath(paths, 'c'); // => undefined

// You can also get the array index instead of the value
matchPath.index(paths, 'b'); // => 1
```

## API

### matchPath(paths, needle)

Given a list of paths and a target, find the most specific path that matches the target.

- **paths** (Array of strings): paths to examine.
- **needle** (String): target path.

Returns a string of the most specific matching path, or `undefined` if no paths match.

### matchPath.index(paths, needle)

Like `matchPath`, but returns the array index instead of the value.

## Local Development

```bash
git clone https://github.com/gakimball/match-specific-path
cd match-specific-path
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
