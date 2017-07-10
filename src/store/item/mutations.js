/* eslint-disable */
import {types, urls} from './types'
export default {
  [types.FETCH] (state, {res}) {
    Object.assign(state, res)
  },
  [types.SEARCH] (state, {res}) {

  }
}
