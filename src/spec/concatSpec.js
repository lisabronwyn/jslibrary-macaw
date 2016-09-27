const expect = require('chai').expect

import concat from '../lib/concat.js'

describe('concat', () => {
  it('concatenates all arrays and values to a new array', () => {
    expect( concat([1,2,3], [4], 5, ['six', 7]) ).to.deep.equal([1,2,3,4,5,'six',7])
  })
  it('concatenates all arrays and values to a new array no matter what the value', () => {
    expect( concat('failingtest', NaN, ['*', true]) ).to.deep.equal(['failingtest', NaN, '*', true])
  })

})
