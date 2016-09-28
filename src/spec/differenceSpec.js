import expect from 'expect.js'
import bland from '../bland'

describe( 'difference', () => {
  it( 'Returns an array of values not included in the other array ', () => {
    expect( bland.difference( [1,2,3,4],[2,4,5] ) ).to.eql( [1,3] )
  })

  it( 'It works with non-number values as well', () => {
    expect( bland.difference( ['a', 'b', 'c'], ['b','o'] ) ).to.eql( ['a','c'] )
  })

  it( 'If compare array is not a valid array, it will return an array identical to the original ', () => {
    expect( bland.difference( [1,2,3,4],{'a':1,'b':2} ) ).to.eql( [1,2,3,4] )
  })

  it( 'If the given array is not a valid array, it returns an empty array', () => {
    expect( bland.difference( undefined,[1,2] ) ).to.eql( [] )
  })

})
