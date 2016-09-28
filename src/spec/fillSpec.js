import { expect } from 'chai'

import bland from '../bland'

describe('fill', () => {
  let ourArray = [9,8,7,6,5]
  it('it will take an array and fill in the array with a given value', () => {
    expect( bland.fill(ourArray, 'a') ).to.deep.equal(['a', 'a', 'a', 'a', 'a'])
  })
  it('takes a newly declared array and fills it with a given value', () => {
    expect( bland.fill(Array(3), 2 ) ).to.deep.equal([2, 2, 2])
  })
  it('can also take a start and end point and only fill in that range of values', () => {
    expect( bland.fill(ourArray, 'muffins', 1, 3 ) ).to.deep.equal([9, 'muffins', 'muffins', 6, 5])
  })
  it('will return an empty array if given value is not an array', () => {
    expect( bland.fill(12, 'a') ).to.deep.equal([])
  })
})
