const keys = [
  'FETCH',
  'ADD',
  'GET_DETAIL',
  'UPDATE',
  'DELETE'
]
export const types = keys.reduce((tps, item) => {
  tps[item] = item
  return tps
}, {})

export const urls = {
  [types.FETCH]: () => '/auth/admin/user',
  [types.ADD]: () => '/auth/admin/user',
  [types.GET]: (id) => '/auth/admin/user/' + id,
  [types.UPDATE]: (id) => '/auth/admin/user/' + id,
  [types.DELETE]: (id) => '/auth/admin/user/' + id
}
