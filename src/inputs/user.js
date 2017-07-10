export default function (target) {
  return [
    {
      key: 'email',
      label: '邮箱',
      rules: {
        required: true
      }
    },
    {
      key: 'password',
      label: '密码',
      type: 'input',
      secondType: 'password',
      rules: {
        required: true
      }
    },
    {
      key: 'username',
      label: '用户名',
      rules: {
        required: true
      }
    },
    {
      key: 'first_name',
      label: '姓'
    },
    {
      key: 'last_name',
      label: '名'
    },
    {
      key: 'gender',
      label: '性别',
      type: 'radio',
      collection: [{label: '男'}, {label: '女'}]
    }
  ]
}
