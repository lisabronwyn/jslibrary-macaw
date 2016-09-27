import indexOf from "../lib/indexOf"
import expect from "expect.js"

describe("indexOf", () => {
	it ("Returns the first index where the given value is found", () => {
		expect (indexOf([2,4,8,9,4],4)).to.eql(1)
	})

	it ("Returns the first index where the given value is found after the given start index", () => {
		expect (indexOf([2,4,8,9,4],4,2)).to.eql(4)
	})
})
