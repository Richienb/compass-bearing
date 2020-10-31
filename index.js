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

	if ((startX === endX) && (startY === endY)) {
		return Number.NaN
	}

	const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI

	if (angle < 0) {
		return -angle + 90
	}

	if (angle <= 90) {
		return 90 - angle
	}

	return 360 - (angle - 90)
}
