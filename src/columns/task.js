import { getActions } from './actions'
export default function (target) {
  return [
    {
      type: 'index',
      width: 60,
      align: 'center'
    },
    {
      title: 'JobId',
      key: 'job_id',
      sortable: 'custom'
    },
    {
      title: '状态',
      key: 'status',
      sortable: 'custom'
    },
    {
      title: '开始时间',
      key: 'start',
      sortable: 'custom'
    },
    {
      title: '结束时间',
      key: 'stop',
      sortable: 'custom'
    },
    ...getActions.call(target, [])
  ]
}
