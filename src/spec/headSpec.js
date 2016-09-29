import expect from 'expect.js'
import bland from '../bland'

describe.only( 'head', () => {

  it( 'gets the first element of an array', () => {
    expect( bland.head( [ 1, 2, 3, 4, 5 ] ) ).to.eql( 1 )
  }) 

  it( 'gets the first element of an array', () => {
    expect( bland.head( 'elle' ) ).to.eql( 'e' )
  })

  it( 'If an array is empty then return undefined', () => {
    expect( bland.head( [ ] ) ).to.eql( undefined )
  })

})
