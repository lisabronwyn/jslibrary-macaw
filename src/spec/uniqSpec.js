import expect from "expect.js"
import bland from "../bland"

describe("uniq", () => {
	it ( 'takes an existing array and then creates a new array that is duplicate free', () => {
		expect( bland.uniq([2, 1, 2])).to.eql([2, 1])
	})

	it ( 'only pushes the first occurrence of each element', () => {
    	expect( bland.uniq([2, 1, 2])).to.eql([2, 1])

    })

  it ( 'the order of the result is the order in which they occur in the array', () => {
        expect( bland.uniq([2, 1, 2])).to.eql([2, 1])
    })
})
