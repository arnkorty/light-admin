import { getActions } from './actions'
export default function (target) {
  return [
    {
      type: 'index',
      width: 60,
      align: 'center'
    },
    {
      title: 'ID',
      key: 'id',
      sortable: 'custom'
    },
    {
      title: '名称',
      key: 'name',
      sortable: 'custom'
    },
    {
      title: '单位',
      key: 'unit',
      sortable: 'custom'
    },
    {
      title: 'TOPIC',
      key: 'topic',
      sortable: 'custom'
    },
    ...getActions.call(target, ['delete'])
  ]
}
