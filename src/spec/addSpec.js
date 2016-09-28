import expect from 'expect.js'
import bland from '../bland'

describe( 'add', () => {

  it( 'Adds two numbers.', () => {
    expect( bland.add( 1, 2 ) ).to.eql( 3 )
  })

  it( 'Check if arguments are numbers.', () => {
    expect( bland.add( "", { 'a': 2 } ) ).to.eql( 'One or both of the values is not a number.' )
  })

})
