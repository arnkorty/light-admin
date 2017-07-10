/* eslint-disable */
import {types, urls} from './types'
import {api} from '../'
export default {
  async get_statistics ({commit}) {
    let res = await api.get(urls.GET_STATISTICS())
    commit(types.GET_STATISTICS, {res})
  }
}
