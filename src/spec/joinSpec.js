import join from '../lib/join'
import expect from 'expect.js'

describe( 'join', () => {
  it( 'Converts all elements in array into a string separated by separator.', () => {
    expect( join( ['a', 'b', 'c'], '~' ) ).to.eql( 'a~b~c' )
  })

  it( 'Converts all elements in array into a string separated by separator.', () => {
    expect( join( ['a', 'b', 'c'], '-' ) ).to.eql( 'a-b-c' )
  })
})
