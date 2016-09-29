import expect from 'expect.js'
import flatMap from '../lib/flatMap'

describe('flatMap', () => {
  it('Flatmap map over an array', () => {
    expect( flatMap( [ 1, 2, 3 ], ( n ) => { return [ n , n ] } ) ).to.eql( [ 1, 1, 2, 2, 3, 3 ] )
  })

  it('Flatmap map over an array', () => {
    expect( flatMap( { '1': 1, '2': 2, '3': 3 }, ( n ) => { return n , n  } ) ).to.eql( 'The Collection is not an Array' )
  })
})
