import { types, urls } from './types'
import { api } from '@/store'
/* eslint-disable */
export default {
  async login ({commit}, user) {
      let res = await api.post(urls.LOGIN, user)
      if (res) {
        commit(types.LOGIN, {res})
      }
  },
  async get_profile ({commit}) {
    let res = await api.get(urls.GET_PROFILE)
    if (res) {
      commit(types.GET_PROFILE, {res})
    }
  },
  async update_profile ({commit}, user) {
    let res = await api.post(urls.UPDATE_PROFILE, user)
    if (res) {
      commit(types.UPDATE_PROFILE, {res: user})
    }
  }
}
