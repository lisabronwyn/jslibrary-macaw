import max from "../lib/max"

import expect from "expect.js"

describe("max", () => {
	it ("Computes the maximum value of array", () => {
		expect (max([9,2,3,5])).to.eql(9)
	})

	it ("if array is empty, undefined is returned", () => {
		expect (max([])).to.eql(undefined)
	})

	it ("if array is falsey, undefined is returned", () => {
		expect (max([null, null])).to.eql(undefined)
	})

	it ("if strings have only numbers, they are treated like numbers", () => {
		expect (max([3, 2, "4"])).to.eql("4")
	})
})