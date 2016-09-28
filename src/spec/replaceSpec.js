import { expect } from 'chai'
import bland from '../bland'

describe('replace', () => {
  it('will look for a pattern in a given string and replace it with something else', () => {
    expect( bland.replace('Hello wor world', 'world', 'Lisa') ).to.deep.equal('Hello wor Lisa')
  })
  it('will return the original string if a pattern is not found', () => {
    expect( bland.replace('Hello Mike', 'Fred', 'Barney') ).to.deep.equal('Hello Mike')
  })

})
