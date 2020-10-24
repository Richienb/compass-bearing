const test = require("ava")
const compassBearing = require(".")

test("main", t => {
	t.is(compassBearing([10, 10], [20, 20]), 45)
	t.is(compassBearing([0, 0], [0, 10]), 0)
	t.is(compassBearing([0, 0], [0, -10]), 180)
})
