import { expect } from 'chai'
 
import replace from '../lib/replace.js'

describe('replace', () => {
  it('will look for a pattern in a given string and replace it with something else', () => {
    expect( replace('Hello wor world', 'world', 'Lisa') ).to.deep.equal('Hello wor Lisa')
  })
  it('will return the original string if a pattern is not found', () => {
    expect( replace('Hello Mike', 'Fred', 'Barney') ).to.deep.equal('Hello Mike')
  })

})
