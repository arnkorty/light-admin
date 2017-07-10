/* eslint-disable */
import { types, urls } from './types'
export default {
  [types.GET_STATISTICS] (state, { res }) {
    Object.assign(state, res)
  }
}
