const keys = [
  'LOGIN',
  'LOGOUT',
  'UPDATE_PROFILE',
  'GET_PROFILE'
]
export const types = keys.reduce((tps, item) => {
  tps[item] = item
  return tps
}, {})

export const urls = {
  [types.LOGIN]: '/auth/signin',
  [types.UPDATE_PROFILE]: '/auth/profile',
  [types.GET_PROFILE]: '/auth/profile'
}
