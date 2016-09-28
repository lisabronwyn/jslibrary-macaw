import { expect } from 'chai'
import bland from '../bland'

describe( 'slice', () => {

  it( 'it creates a new array that contains part of another array from start to end index', () => {
    let newArray = [1,2,3,4,5]
    expect( bland.slice( newArray, 1, 3 ) ).to.eql( [2, 3] )
  })

  it( 'will return the same array if a start and end index are not specified', () => {
    let newArray = [1,2,3,4,5]
    expect( bland.slice( newArray ) ).to.eql( [1,2,3,4,5] )
  })

  it( 'the end or begin values are negative then it is used as the offset from the end of the array', () => {
    let longArray = [1,2,3,4,5,6,7]
    expect( bland.slice( longArray, -4, -1) ).to.eql( [4,5,6] )
  })
  it (' returns an empty array if an invalid input is given', () => {
    expect( bland.slice( 12 )).to.eql( [])
  })
})
