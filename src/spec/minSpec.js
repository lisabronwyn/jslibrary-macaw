import min from "../lib/min"

import expect from "expect.js"

describe("min", () => {
	it ("Computes the minimum value of array", () => {
		expect (min([9,2,3,5])).to.eql(2)
	})

	it ("if array is empty, undefined is returned", () => {
		expect (min([])).to.eql(undefined)
	})

	it ("if array is falsey, undefined is returned", () => {
		expect (min([null, null])).to.eql(undefined)
	})

	it ("if strings have only numbers, they are treated like numbers", () => {
		expect (min([3, "2", 4])).to.eql("2")
	})
})