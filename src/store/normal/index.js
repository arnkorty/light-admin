/**
 * 登陆及对应的登陆用户相关
 */
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
const state = {
  item_total: 0,
  task_total: 0
}
export default {
  state,
  actions,
  getters,
  mutations,
  namespaced: true
}
