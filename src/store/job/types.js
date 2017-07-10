export const types = {
  FETCH_TASK: 'FETCH_TASK',
  TASK_STATISTICS: 'TASK_STATISTICS',
  FETCH: 'FETCH',
  ADD: 'ADD',
  DELETE: 'DELETE'
}
export const urls = {
  [types.FETCH]: () => '/jd/admin/job',
  [types.ADD]: () => '/jd/admin/job',
  [types.FETCH_TASK]: () => '/jd/admin/task',
  [types.TASK_STATISTICS]: () => '/jd/admin/task/statistics',
  [types.DELETE]: (id) => '/jd/admin/job/' + id
}
