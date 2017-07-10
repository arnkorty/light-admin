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
  }
}
