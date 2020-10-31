const test = require("ava")
const compassBearing = require(".")

test("main", t => {
	t.is(compassBearing([0, 0], [0, 0]), Number.NaN)
	t.is(compassBearing([0, 0], [0, 1]), 0)
	t.is(compassBearing([0, 0], [1, 1]), 45)
	t.is(compassBearing([0, 0], [1, 0]), 90)
	t.is(compassBearing([0, 0], [1, -1]), 135)
	t.is(compassBearing([0, 0], [0, -1]), 180)
	t.is(compassBearing([0, 0], [-1, -1]), 225)
	t.is(compassBearing([0, 0], [-1, 0]), 270)
	t.is(compassBearing([0, 0], [-1, 1]), 315)
})
