
import { format } from './samples'

describe('sample', () => {

  it('should pass miscellaneous tests', () => {
    expect(1).toEqual(1)
    expect(format(new Date('3/13/2017'))).toEqual('03/13/2017')
  })



})
