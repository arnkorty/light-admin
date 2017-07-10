import { allPages } from '../router/pages'
export function getCurrentMenus (user) {
  return [
    allPages.Home,
    {
      ...allPages.Users,
      text: '用户',
      children: [
        allPages.Users
      ]
    },
    {
      ...allPages.Job,
      text: '定时任务',
      icon: 'calendar',
      children: [
        allPages.Job,
        allPages.Task,
        allPages.TaskStatistics
      ]
    },
    allPages.ProductItem
  ]
}
