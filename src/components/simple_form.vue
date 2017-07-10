<template>
  <div class="simple-form">
    <Row v-if="title && title.length > 0" class="form-title">
      <h3>{{title}}</h3>
    </Row>
    <Form>
    <Row v-for="item in inputs" :key="item.key" class="form-control">
      <Col :sm="labelCol.sm || 4" :xs="labelCol.xs || 24">
        <Label class='form-label'>
          {{item.label}}
        </Label>
      </Col>
      <Col :sm="inputCol.sm || 15" :xs="inputCol.xs || 24">
        <Input :type="item.secondType || 'text'" v-if="!item.type || item.type === 'input'" @on-enter="handleSubmit" v-model="obj[item.key]">
        </Input>
        <Radio-group v-if="item.type === 'radio'" v-model="obj[item.key]">
          <Radio v-for="opt in item.collection" :key="opt.label" :label="opt.label">
            <Icon :type="opt.icon" v-if="opt.icon"></Icon>
            <span v-if="opt.text">{{opt.text}}</span>
          </Radio>
        </Radio-group>
        <div class="error" v-if="errors[item.key]">
          {{errors[item.key]}}
        </div>
      </Col>
    </Row>
    <Row v-if="showAction" class="form-actions" :class="{'ivu-modal-footer': isModal}">
      <Col :sm="{span: inputCol.sm || 15, offset: labelCol.sm || 4}" v-if="!isModal" >
        <Button type="success" @click="handleSubmit" :loading="isLoading" :disable="!valid">
          {{this.getSubmitButtonText}}
        </Button>
      </Col>
      <template v-if="isModal">
        <Button @click="handleCancel">取消</Button>
        <Button type="success" @click="handleSubmit" :loading="isLoading" :disabled="!valid">
          {{this.getSubmitButtonText}}
        </Button>
      </template>
    </Row>
    </Form>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Emitter from 'iview/src/mixins/emitter'
/* eslint-disable */
import {validate, isValidate, setCurrentClick, compareCurrentClick} from '../utils'
// import {Input} from 'iview'
export default {
  name: 'SimpleForm',
  mixins: [ Emitter ],
  props: {
    showAction: {
      type: Boolean,
      default: true
    },
    inputs: {
      type: Array,
      default: () => []
    },
    initData: {
      type: Object,
      default: () => ({})
    },
    isModal: {
      type: Boolean,
      default: false
    },
    modalOpen: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    labelCol: {
      type: Object,
      default: () => ({})
    },
    inputCol: {
      type: Object,
      default: () => ({})
    },
    submitButtonText: {
      type: String,
      default: '提交'
    },
    submitErrorText: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    let obj = {}
    let errors = {}
    let oldObj = {}
    const changed = false
    this.inputs.forEach(input => {
      obj[input.key] = oldObj[input.key] = this.initData[input.key]
      errors[input.key] = null
      // oldObj[input.key] = ''
    })
    return {
      obj,
      errors,
      oldObj,
      changed,
      canceled: false,
      initing: false,
    }
  },
  computed: {
    ...mapState('common', ['loading']),
    isLoading () {
      return this.loading && compareCurrentClick(this)
    },
    getRules () {
      return {...this.inputs.reduce((rules, val) => {
        rules[val.key] = val.rules
        return rules
      }, {}), ...this.rules}
    },
    getSubmitButtonText () {
      if (this.changed || this.submitErrorText.length === 0) {
        return this.submitButtonText
      } else {
        return this.submitErrorText
      }
    },
    valid () {
      return isValidate(this.obj, this.getRules)
    },
  },
  methods: {
    handleSubmit (event) {
      if (isValidate(this.obj, this.getRules, this.errors)) {
        this.changed = false
        setCurrentClick(this)
        this.$emit('on-submit', Object.assign({}, this.obj))
      }
    },
    handleCancel () {
      this.$emit('on-cancel', this.obj)
    }
  },
  watch: {
    'obj': {
      handler: function (nval) {
        this.changed = true
        if (this.canceled || this.initing) {
          return
        }
        for (let k in nval) {
          if (nval[k] !== this.oldObj[k]) {
            const error = validate(nval[k], this.getRules[k])
            if (error === 'OK') {
              this.errors[k] = null
            } else {
              this.errors[k] = error
            }
          }
        }
        this.oldObj = {...nval}
      },
      deep: true
    },
    modalOpen (nval) {
      if (nval) {
        this.canceled = false
      } else {
        this.canceled = true
        for (let k in this.obj) {
          this.errors[k] = null
          this.obj[k] = this.initData[k]
        }
      }
    },
    initData (nval) {
      this.initing = true
      for (let k in this.obj) {
        this.obj[k] = nval[k]
        this.errors[k] = null
      }
      setTimeout(() => this.initing = false, 200)
    } 
  }
}
</script>
