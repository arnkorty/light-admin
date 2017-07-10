import { types } from './types'
import { saveToken, removeToken } from '@/utils'
import { redirect } from '@/router'
export default {
  [types.LOGIN] (state, {res}) {
    saveToken(res.token, res.expired)
    redirect('/')
  },
  [types.GET_PROFILE] (state, {res}) {
    state.user = res
  },
  [types.UPDATE_PROFILE] (state, {res}) {
    state.user = Object.assign(state.user, res)
  },
  [types.LOGOUT] (state) {
    removeToken()
    state.user = null
    redirect({name: 'Signin'})
  }
}
