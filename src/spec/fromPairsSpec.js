
const expect = require('chai').expect
import fromPairs from "../lib/fromPairs"

//import expect from "expect.js"


describe.only("fromPairs", () => {
	it ("It takes an array of arrays and creates an Object with a key and value based on the first two elements of those arrays", () => {
		expect (fromPairs([['a',2],[5,"Muffins"]])).to.eql({'a':2 , 5:"Muffins"})
	})

  it ("It only uses the first two elements of a given array when creating key-pair values", () => {
		expect (fromPairs([['a',2,3,22,"hike"],[5,"Muffins"]])).to.eql({'a':2 , 5:"Muffins"})
	})

})
