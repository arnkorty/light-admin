const keys = [
  'ADD_REQUEST',
  'DONE_REQUEST',
  'FRESH_MSG'
]
export const types = keys.reduce((tps, item) => {
  tps[item] = item
  return tps
}, {})
