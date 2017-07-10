export const types = {
  FETCH: 'FETCH',
  SEARCH: 'SEARCH'
}
export const urls = {
  [types.FETCH]: () => '/jd/admin/item',
  [types.SEARCH]: () => '/jd/admin/item/search'
}
