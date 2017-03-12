

import { ss, tt } from './isArray'

describe('array', () => {

  it('should know Array.length', () => {
    expect([1,2].length).toEqual(2)
    expect([].length).toEqual(0)

  })

  it('should handle invalid method', () => {
    tt()
  })

})
