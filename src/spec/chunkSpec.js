import expect from 'expect.js'
import bland from '../bland'

describe('chunk', () => {

  it( 'Creates an array of elements split into groups the length of the size', () => {
    expect( bland.chunk( ['a', 'b', 'c', 'd'], 2) ).to.eql( [ ['a', 'b'] , ['c', 'd'] ]   )
  })

  it( 'If array cannot be split evenly, the final chunk will be the remaining elements.',  () => {
    expect( bland.chunk( ['a', 'b', 'c', 'd'], 3) ).to.eql( [ ['a', 'b', 'c'], ['d'] ])
  })
})

//
// describe('compact', () => {
//   it('Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.', () => {
//     expect( bland.compact( [ false, null, 0, "", undefined, NaN ] ) ).to.eql( [] )
//   })
//
//   it('Creates an array with all falsey values removed.', () => {
//     expect( bland.compact( [ false, null, 0, "", undefined, NaN, 'Devon' ] ) ).to.eql( ['Devon'] )
//   })
//
//   it('Creates an array with all falsey values removed.', () => {
//     expect( bland.compact( [ false, null, 0, "", undefined, NaN, 'Devon', 5, true ] ) ).to.eql( [ 'Devon', 5, true ] )
//   })
// })
