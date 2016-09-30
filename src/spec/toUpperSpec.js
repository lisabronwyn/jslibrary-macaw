import expect from "expect.js"
import bland from '../bland'

describe("toUpper", () => {
	it ("Converts a string to upper case", () => {
		expect( bland.toUpper('Hello there.')).to.eql("HELLO THERE.")
	})

	it ("Ignores punctuation when converting.", () => {
		expect( bland.toUpper("Hey, I'm not yelling!")).to.eql("HEY, I'M NOT YELLING!")
	})

  it ("If passed undefined or null, it will return an empty string.", () => {
		expect( bland.toUpper(undefined)).to.eql("")
	})

})
