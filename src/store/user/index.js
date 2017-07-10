/**
 * 登陆及对应的登陆用户相关
 */
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
const state = {
  data: [],
  filter: {},
  total: 0,
  detail: {}
}
export default {
  state,
  actions,
  getters,
  mutations,
  namespaced: true
}
