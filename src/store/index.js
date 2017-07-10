import { sync } from 'vuex-router-sync'
import router from '../router'
import Vuex from 'vuex'
import Vue from 'vue'
import createLogger from 'vuex/dist/logger'

// modules
import auth from './auth'
import user from './user'
import spider from './spider'
import common from './common'
import normal from './normal'
import job from './job'
import item from './item'
import { http } from '@/utils'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    user,
    spider,
    common,
    normal,
    job,
    item
  },
  plugins: [createLogger()]
})

sync(store, router)
export default store
const commit = store.commit
export const api = {
  post: (url, params) => http(commit, url, 'post', params),
  get: (url, params) => http(commit, url, 'get', params),
  put: (url, params) => http(commit, url, 'put', params),
  delete: (url, params) => http(commit, url, 'delete', params),
  patch: (url, params) => http(commit, url, 'patch', params)

}
