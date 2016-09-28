import expect from 'expect.js'
import bland from '../bland'

describe( 'assign', () => {

  it( 'Assigns own properties of source objects to the destination object.', () => {
    const obj = { 'b': 2 }

    const obj2 = { 'c': 'muffins' }

    expect( bland.assign( { 'a': 0, 'c': 3 }, obj, obj2 ) ).to.eql( { 'a': 0, 'b': 2, 'c': 'muffins' } )
  })

  it( 'Assigns own properties of source objects to the destination object.', () => {
    const obj = [ 'b', 2 ]

    const obj2 = { 'c': 'muffins' }

    expect( bland.assign( { 'a': 0, 'c': 3 }, obj, obj2 ) ).to.eql( { 0: 'b', 1: 2, 'a': 0, 'c': 'muffins' } )
  })

  it( 'Assigns own properties of source objects to the destination object.', () => {
    const Foo = function() { this.a = 4 }

    const obj2 = { 'c': 'muffins' }

    expect( bland.assign( { 'a': 0, 'c': 3 }, new Foo, obj2 ) ).to.eql( { 'a': 4, 'c': 'muffins' } )
  })

})
