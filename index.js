"use strict"

const assertNumber = value => {
	if (typeof value !== "number") {
		throw new TypeError(`Expected a number, got ${typeof value}`)
	}
}

module.exports = ([startX, startY], [endX, endY]) => {
	assertNumber(startX)
	assertNumber(startY)
	assertNumber(endX)
	assertNumber(endY)

	return Math.atan2(endX - startX, endY - startY) * 180 / Math.PI
}
