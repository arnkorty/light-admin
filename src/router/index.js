import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import { isLogin } from '@/utils'
import {Auth, SigninPages, NotFoundPage} from './pages'
// import Hello from '@/components/Hello'
Vue.use(Router)

const LayoutAuthorized = () => import('@/layouts/authorized')

const routers = new Router({
  routes: [
    {
      ...Auth.Signin,
      alias: '/auth',
      beforeEnter: (to, from, next) => {
        if (isLogin()) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/',
      component: LayoutAuthorized,
      beforeEnter: (to, from, next) => {
        if (isLogin()) {
          next()
        } else {
          next({name: 'Signin'})
        }
      },
      children: [
        ...SigninPages()
      ]
    },
    NotFoundPage
  ]
})

routers.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})
routers.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
})

export default routers
export function redirect (path) {
  routers.push(path)
}
