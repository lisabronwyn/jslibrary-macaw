import expect from "expect.js"
import bland from "../bland"

describe("subtract", () => {
	it ( "Subtracts two numbers", () => {
		expect( bland.subtract(5, 3) ).to.eql(2)
	})

	it ( 'Check if arguments are numbers.', () => {
    	expect( bland.subtract( "", { 'a': 2 } ) ).to.eql( 'One or both of the values is not a number.' )
    })
})