# compass-bearing [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/compass-bearing/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/compass-bearing)

Get the [relative](https://en.wikipedia.org/wiki/Relative_bearing) [compass bearing](https://en.wikipedia.org/wiki/Bearing_(navigation)) of a set of coordinates from another set.

[![NPM Badge](https://nodei.co/npm/compass-bearing.png)](https://npmjs.com/package/compass-bearing)

## Install

```sh
npm install compass-bearing
```

## Usage

```js
const compassBearing = require("compass-bearing")

compassBearing([10, 10], [20, 20])
//=> 45
```

## API

### compassBearing([startX, startY], [endX, endY])

#### startX, startY, endX, endY

Type: `number`

The starting and ending coordinates to get the relative bearing from. Returns a degree from `0` up to (but excluding) `360`.
