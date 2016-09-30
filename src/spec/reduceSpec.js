import expect from 'expect.js'
import reduce from '../lib/reduce'

describe('Reduce', () => {
  it( 'Reduces collection to a value which is the accumulated result', () => {

    const equation = ( sum, n ) => { return sum + n }

    expect( reduce( [ 1, 2 ], equation, 0 ) ).to.eql( 3 )
  })

  it( 'Check if value is Array || Object', () => {

    const equation = ( sum, n ) => { return sum + n }

    expect( reduce( 'value', equation, 0 ) ).to.eql( "" )
  })

  it( 'Reduces the value to an object accumulated result', () => {

    const addToArray = ( result, value, key ) => {

      ( result[ value ] || ( result[ value ] = [] ) ).push( key )

      return result;
    }

    expect( reduce( { 'a': 1, 'b': 2, 'c': 1 }, addToArray, {} ) ).to.eql( { '1': ['a', 'c'], '2': ['b'] } )
  })
})
