import expect from 'expect.js'
import bland from '../bland'

describe( 'join', () => {
  it( 'Converts all elements in array into a string separated by separator.', () => {
    expect( bland.join( ['a', 'b', 'c'], '~' ) ).to.eql( 'a~b~c' )
  })

  it( 'Converts all elements in array into a string separated by separator.', () => {
    expect( bland.join( ['a', 'b', 'c'], '-' ) ).to.eql( 'a-b-c' )
  })
})
