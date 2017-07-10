/* eslint-disable */
import {types, urls} from './types'
import {api} from '../'
export default {
  async fetch ({commit, state}, filter) {
    filter = {...state.filter, ...filter}
    let res = await api.get(urls.FETCH(), filter)
    commit(types.FETCH, { res })
  },
  async search ({commit}, filter) {
    let res = await api.post(urls.SEARCH(), filter)
    console.log(res)
  }
}
