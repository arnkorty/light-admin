const Profile = () => import('@/pages/profile')
const Signin = () => import('@/pages/auth/signin')
const Home = () => import('@/pages/home')
const NotFound = () => import('@/pages/shared/not_found')
const Users = () => import('@/pages/users')
const Job = () => import('@/pages/job')
const Task = () => import('@/pages/job/task')
const TaskStatistics = () => import('@/pages/job/task_statistics')
const ProductItem = () => import('@/pages/product_item')
export const Auth = {
  Signin: {
    path: '/auth/signin',
    name: 'Signin',
    component: Signin
  }
}
export const Authorized = {
  Home: {
    path: '/',
    name: 'Home',
    text: '首页',
    icon: 'home',
    component: Home
  },
  Profile: {
    path: '/profile',
    name: 'Profile',
    text: '个人信息',
    component: Profile,
    parent: ['Home']
  },
  Users: {
    path: '/users',
    name: 'Users',
    text: '用户管理',
    icon: 'person-stalker',
    parent: ['Home'],
    component: Users
  },
  Job: {
    path: '/job',
    name: 'Job',
    text: 'Job定时任务',
    icon: 'gear-a',
    component: Job,
    parent: ['Home']
  },
  Task: {
    path: '/job/task',
    name: 'Task',
    text: 'task列表',
    icon: 'ios-list',
    component: Task,
    parent: ['Home', 'Job']
  },
  TaskStatistics: {
    path: '/job/task_statistics',
    name: 'TaskStatistics',
    text: 'Task总数',
    icon: 'ios-grid-view',
    component: TaskStatistics,
    parent: ['Home', 'Job']
  },
  ProductItem: {
    path: '/items',
    name: 'ProductItem',
    text: '商品',
    icon: 'ios-color-filter',
    component: ProductItem,
    parent: ['Home']
  }
}
export const NotFoundPage = {
  path: '*',
  name: 'NotFound',
  text: '404',
  component: NotFound
}
export function SigninPages () {
  let arr = []
  for (let k in Authorized) {
    arr.push(Authorized[k])
  }
  return arr
}
export const allPages = {
  ...Auth,
  ...Authorized
}
