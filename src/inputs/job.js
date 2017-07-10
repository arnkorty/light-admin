export default function (target) {
  return [
    {
      key: 'name',
      label: '名称',
      rules: {
        required: true
      }
    },
    {
      key: 'interval',
      label: '间隔',
      rules: {
        required: true
      }
    },
    {
      key: 'unit',
      label: '单位',
      rules: {
        required: true
      }
    },
    {
      key: 'topic',
      label: 'TOPIC'
    }
  ]
}
