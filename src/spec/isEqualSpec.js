import isEqual from '../lib/isEqual'
import expect from 'expect.js'

describe.only( 'isEqual', () => {

  it( 'Performs a deep comparison between two values to determine if the Object are equal', () => {
    let obj = { 'a': 1, 'b': 2 }
    let other = { 'a': 1, 'b': 2 }

    expect( isEqual( obj, other ) ).to.eql( true )
  })

  it( 'Performs a deep comparison between two values to determine if the Object are NOT equal', () => {
    let obj = { 'a': 1, b: 2 }
    let other = { 'a': 1, b: 3 }

    expect( isEqual( obj, other ) ).to.eql( false )
  })

  it( 'Performs a deep comparison between two values should return true', () => {
    let arr = [ 1 , 2 ]
    let other = [ 1, 2 ]

    expect( isEqual( arr, other ) ).to.eql( true )
  })

  it( 'Performs a deep comparison between two Arrays should return false', () => {
    let arr = [ 1 , 2 ]
    let other = [ 1, 3 ]

    expect( isEqual( arr, other ) ).to.eql( false )
  })

  it( 'Performs a deep comparison to compare types', () => {
    let arr = [ 1 , 2 ]
    let other = { b: 1, a: 3 }

    expect( isEqual( arr, other ) ).to.eql( false )
  })

})
