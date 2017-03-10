// helpers.js

import { v4 } from 'node-uuid'

export const random_uuid = (n = 2) => {
  return [...Array(n)].map(() => v4())
}

export function times(x, f){
  if (x > 0) {
    f()
    times (x - 1, f)
  }
}

export function xxx(x, f){
  if (x > 0) {
    f()
    xxx (x - 1, f)
  }
}
