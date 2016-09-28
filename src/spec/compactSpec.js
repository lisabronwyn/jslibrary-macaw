import expect from 'expect.js'
import bland from '../bland'

describe('compact', () => {
  it('Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.', () => {
    expect( bland.compact( [ false, null, 0, "", undefined, NaN ] ) ).to.eql( [] )
  })

  it('Creates an array with all falsey values removed.', () => {
    expect( bland.compact( [ false, null, 0, "", undefined, NaN, 'Devon' ] ) ).to.eql( ['Devon'] )
  })

  it('Creates an array with all falsey values removed.', () => {
    expect( bland.compact( [ false, null, 0, "", undefined, NaN, 'Devon', 5, true ] ) ).to.eql( [ 'Devon', 5, true ] )
  })
})
