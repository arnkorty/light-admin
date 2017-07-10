/* eslint-disable */
import {types, urls} from './types'
import {api} from '../../store'
export default {
  async fetch ({commit, state}, filter) {
    filter = {...state.filter, ...filter}
    let res = await api.get(urls.FETCH(), state.filter)
    commit(types.FETCH, { res })
  },
  async update ({commit, state}, {id, params}) {
    await api.post(urls.UPDATE(id), params)
    params['uid'] = id
    console.log(params)
    commit(types.UPDATE, {res: params})
  },
  async add ({commit, state}, {params}) {
    let res = await api.post(urls.ADD(), params)
    res = {...res, ...params}
    commit(types.ADD, { res })
  },
  async delete ({commit, state}, id) {
    await api.delete(urls.DELETE(id))
    commit(types.DELETE, id)
  }
}
