import expect from "expect.js"
import bland from "../bland"

describe("lastIndexOf", () => {
	it ("Returns the last index where the given value is found", () => {
		expect( bland.lastIndexOf([2,4,8,9,4],4)).to.eql(4)
	})

	it ("Returns the last index where the given value is found to the left of the given start index", () => {
		expect( bland.lastIndexOf([2,4,8,9,4],4,2)).to.eql(1)
	})
})
