import { getActions } from './actions'
export default function (target) {
  return [
    {
      type: 'index',
      width: 60,
      align: 'center',
      fixed: 'left'
    },
    {
      title: 'ID',
      key: 'id',
      width: 100,
      sortable: 'custom'
    },
    {
      title: '名称',
      key: 'name',
      width: 300,
      sortable: 'custom'
    },
    {
      title: 'SKU',
      key: 'sku',
      width: 100,
      sortable: 'custom'
    },
    {
      title: 'SP_BRAND',
      key: 'sp_brand',
      width: 100,
      sortable: 'custom'
    },
    {
      title: 'SP_NAME',
      key: 'sp_name',
      width: 300,
      sortable: 'custom'
    },
    {
      title: 'c1',
      key: 'c1',
      width: 100,
      sortable: 'custom'
    },
    {
      title: 'c2',
      key: 'c2',
      width: 100,
      sortable: 'custom'
    },
    {
      title: 'c3',
      key: 'c3',
      width: 100,
      sortable: 'custom'
    },
    {
      title: 'price',
      key: '价格',
      width: 100,
      sortable: 'custom'
    },
    {
      title: 'comment_count',
      key: 'commont_count',
      width: 100,
      sortable: 'custom'
    },
    {
      title: '差评',
      key: 'bad_rate',
      width: 100,
      sortable: 'custom'
    },
    {
      title: '差评',
      key: 'bad_rate',
      width: 100,
      sortable: 'custom'
    },
    {
      title: 'shop_name',
      key: '店铺',
      width: 100,
      sortable: 'custom'
    },
    {
      title: 'fetch_time',
      key: '更新时间',
      width: 100,
      sortable: 'custom'
    },
    ...getActions.call(target, ['show'], {fixed: 'right'})
  ]
}
