<template>
  <Modal v-model="visible" :title="title" class-name="modal-form">
    <SimpleForm :inputs="inputs" @on-submit="onSubmit" :isModal="true" :init-data="initData" :modalOpen="visible" @on-cancel="onCancel"></SimpleForm>
  </Modal>
</template>
<script>
import SimpleForm from './simple_form'
export default {
  name: 'ModalForm',
  components: {
    SimpleForm
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    inputs: {
      type: Array,
      default: () => ({})
    },
    initData: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String
    }
  },
  data () {
    return {
      visible: this.value
    }
  },
  methods: {
    onCancel (obj) {
      this.$emit('on-cancel', obj)
      this.visible = false
    },
    onSubmit (obj) {
      this.$emit('on-submit', obj)
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  }
}
</script>
<style lang="less">
.modal-form {
  .ivu-modal-body .ivu-modal-footer{
    margin-left: -16px;
    margin-right: -16px;
    margin-bottom: -16px;
    margin-top: 16px;
  }
  .ivu-modal-content > .ivu-modal-footer {
    display: none;
  }
}
</style>
