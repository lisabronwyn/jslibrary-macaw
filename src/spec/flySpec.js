import fly from "../lib/fly"

import expect from "expect.js"

describe("fly", () => {
	it ("This function returns the variable", () => {
		expect (fly(3)).to.eql(3)
	})
})
