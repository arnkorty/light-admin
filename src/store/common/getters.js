/* eslint-disable */
import {allPages} from '../../router/pages'
export default {
  title (state, getters, stateRoot) {
    return getters.currentRouter.text
  },
  currentRouter (state, getters, stateRoot) {
    return allPages[stateRoot.route.name]
  }
}
