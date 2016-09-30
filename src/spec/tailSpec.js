import expect from 'expect.js'
import bland from '../bland'

describe( 'tail', () => {

  it( 'gets the last element of an array', () => {
    expect( bland.tail( [ 1, 2, 3, 4, 5 ] ) ).to.eql( 5 )
  })

  it( 'gets the last element of an array', () => {
    expect( bland.tail( 'elle' ) ).to.eql( 'e' )
  })

  it( 'If an array is empty then return undefined', () => {
    expect( bland.tail( [ ] ) ).to.eql( undefined )
  })

})
