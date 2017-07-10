export function getActions (actions = ['edit', 'delete'], props = {}) {
  if (actions.length === 0) {
    return []
  }
  return [{
    ...props,
    title: '操作',
    key: 'action',
    align: 'center',
    className: 'operator-actions',
    render: (h, params) => {
      return h('div', actions.map(action => allActions.call(this, h, params)[action]))
    }
  }]
}

function allActions (h, params) {
  return {
    edit: h('Button', {
      props: {
        type: 'primary',
        size: 'small'
      },
      on: {
        click: () => {
          if (this.onAction) {
            this.onAction('edit', params)
          }
        }
      }
    }, '编辑'),
    delete: h('Button', {
      props: {
        type: 'error',
        size: 'small'
      },
      on: {
        click: () => {
          this.$Modal.confirm({
            content: '确认删除',
            onOk: () => {
              if (this.onAction) {
                this.onAction('delete', params)
              }
            }
          })
        }
      }
    }, '删除')
  }
}
