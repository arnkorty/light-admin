import { getActions } from './actions'
export default function (target) {
  return [
    {
      type: 'index',
      width: 60,
      align: 'center'
    },
    {
      title: '用户ID',
      key: 'uid'
    },
    {
      title: '邮箱',
      key: 'email'
    },
    {
      title: '用户名',
      key: 'username',
      sortable: 'custom'
    },
    {
      title: '名',
      key: 'first_name',
      sortable: 'custom',
      width: 100
    },
    {
      title: '姓',
      key: 'last_name',
      width: 100
    },
    {
      title: '性别',
      key: 'gender',
      width: 80
    },
    {
      title: '注册日期',
      key: 'date_joined'
    },
    ...getActions.call(target)
  ]
}
