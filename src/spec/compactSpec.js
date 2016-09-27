import compact from '../lib/compact'
import expect from 'expect.js'

describe('compact', () => {
  it('Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.', () => {
    expect( compact( [ false, null, 0, "", undefined, NaN ] ) ).to.eql( [] )
  })

  it('Creates an array with all falsey values removed.', () => {
    expect( compact( [ false, null, 0, "", undefined, NaN, 'Devon' ] ) ).to.eql( ['Devon'] )
  })

  it('Creates an array with all falsey values removed.', () => {
    expect( compact( [ false, null, 0, "", undefined, NaN, 'Devon', 5, true ] ) ).to.eql( [ 'Devon', 5, true ] )
  })
})
