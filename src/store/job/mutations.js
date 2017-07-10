/* eslint-disable */
import {types} from './types'
export default {
  [types.FETCH] (state, { res }) {
    state.data    = res.data
    state.total   = res.total
    state.filter  = res.filter
  },
  [types.ADD] (state, { res }) {
    state.total += 1
    state.data = [res, ...state.data]
  },
  [types.DELETE] (state, id) {
    state.total -= 1
    state.data = state.data.filter(dt => dt.uid !== id)
  },
  [types.GET_DETAIL] (state, { res }) {
    state.detail = res
  },
  [types.UPDATE] (state, {res}) {
    state.data.filter(dt => dt.uid === res.uid).forEach(dt => Object.assign(dt, res))
  },
  [types.FETCH_TASK] (state, { res }) {
    state.tasks    = res.data
    state.task_total   = res.total
    state.task_filter  = res.filter
  },
  [types.TASK_STATISTICS] (state, {res}) {
    Object.assign(state.task_statistics, res)
  }
}
