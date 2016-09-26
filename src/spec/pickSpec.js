import pick from '../lib/pick'
import expect from 'expect.js'

describe('pick', () => {
  const contact = {
    "firstName": "Devon",
    "lastName": "Wesley",
    "address": "2310 65th ave",
    "city": "Oakland",
    "state": "CA"
  }

  it('Creates an object composed of the picked object properties.', () => {
    expect( pick( contact, [ "firstName", "lastName" ] ) ).to.eql( {
      "firstName": "Devon",
      "lastName": "Wesley"
    })
  })

  it('Creates an object composed of the picked object properties.', () => {
    expect( pick( contact, [ "city", "state" ] ) ).to.eql( {
      "city": "Oakland",
      "state": "CA"
    })
  })

  it('Creates an object composed of the picked object properties.', () => {
    expect( pick( contact, [ "address" ] ) ).to.eql( { "address":  "2310 65th ave" })
  })
})
