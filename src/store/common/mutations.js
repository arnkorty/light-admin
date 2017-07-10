/* eslint-disable */
import { types } from './types'
import { t } from '@/utils'
export default {
  [types.ADD_REQUEST] (state) {
    state.loading = true
  },
  [types.DONE_REQUEST] (state, payload) {
    state.loading = false
    if (payload.error) {
      state.error_msg = t(payload.error)
      state.request_failure = true
    } else {
      state.error_msg = ''
      state.request_failure = false
    }
  },
  [types.FRESH_MSG] (state, payload = {}) {
    if (payload.error) {
      state.error_msg = t(payload.error)
      state.request_failure = true
    } else {
      state.error_msg = ''
      state.request_failure =  false
    }
  }
}
