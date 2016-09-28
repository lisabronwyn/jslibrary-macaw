import { expect } from 'chai'
import bland from '../bland'

describe('concat', () => {

  it('concatenates all arrays and values to a new array', () => {
    expect( bland.concat([1,2,3], [4], 5, ['six', 7]) ).to.deep.equal([1,2,3,4,5,'six',7])
  })

  it('concatenates all arrays and values to a new array no matter what the value', () => {
    expect( bland.concat('failingtest', NaN, ['*', true]) ).to.deep.equal(['failingtest', NaN, '*', true])
  })

})
