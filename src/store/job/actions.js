/* eslint-disable */
import {types, urls} from './types'
import {api} from '../../store'
export default {
  async fetch ({commit, state}, filter) {
    filter = {...state.filter, ...filter}
    let res = await api.get(urls.FETCH(), state.filter)
    commit(types.FETCH, { res })
  },
  async add ({commit, state}, {params}) {
    let res = await api.post(urls.ADD(), params)
    res = {...res, ...params}
    commit(types.ADD, { res })
  },
  async delete ({commit, state}, id) {
    await api.delete(urls.DELETE(id))
    commit(types.DELETE, id)
  },
  async fetch_tasks ({commit, state}, filter) {
    filter = {...state.filter, ...filter}
    let res = await api.get(urls.FETCH_TASK(), state.filter)
    commit(types.FETCH_TASK, { res })
  },
  async get_task_statistics ({commit, state}) {
    let res = await api.get(urls.TASK_STATISTICS())
    commit(types.TASK_STATISTICS, { res })
  }
}
