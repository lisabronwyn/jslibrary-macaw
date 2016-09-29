import { expect } from 'chai'
import flatten from '../lib/flatten'

describe( 'flatten', () => {
  it('It flattens the array a single level', () => {
    expect( flatten([[1,2],[5,3,[4,6]]]) ).to.eql( [1,2,5,3,[4,6]] )
  })

  it('It returns an array of strings', () => {
    expect( flatten("Geo") ).to.eql( ["G", "e", "o"] )
  })

  it('It returns an empty array in all other instances', (done) => {
    expect( flatten(5) ).to.eql( [] ),
    expect( flatten(false) ).to.eql( [] ),
    expect( flatten(null) ).to.eql( [] ),

    expect( flatten({}) ).to.eql( [] )
    done()
  })

})
