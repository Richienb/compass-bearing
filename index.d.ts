/**
Get the [relative](https://en.wikipedia.org/wiki/Relative_bearing) [compass bearing](https://en.wikipedia.org/wiki/Bearing_(navigation)) of a set of coordinates from another set.

@param startCoordinates The starting x and y coordinate pair to get the relative bearing from.
@param endCoordinates The ending x and y coordinate pair to get the relative bearing from.
@returns A degree from `0` up to (but excluding) `360`.

@example
```
const compassBearing = require("compass-bearing")

compassBearing([10, 10], [20, 20])
//=> 45
```
*/
declare function compassBearing(startCoordinates: [number, number], endCoordinates: [number, number]): number

export = compassBearing
