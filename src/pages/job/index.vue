<template>
  <div class="job">
    <Row class="tools table">
      <Col span="12" class="operators">
        <Button @click="handleAdd" type="success">添加</Button>
      </Col>
      <Col span="12" class="count">
        共有{{total}}条数据
      </Col>
    </Row>
    <ModalForm :title="'添加'" @on-cancel="onCancel" :inputs="inputs" @on-submit="onSubmit" :init-data="initData" v-model="formModel">
    </ModalForm>
    <Table width="auto" border :columns="columns" :data="data" class="data-table" @on-sort-change="sortChange"></Table>
    <Page
      class='list-page'
      :page-size="filter.page_size"
      :current-page="filter.current_page"
      :total="total"
      @on-change="pageChange"
      @on-page-size-change="pageSizeChange"
      show-elevator
      show-sizer></Page>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import columns from '../../columns/job'
import inputs from '../../inputs/job'
import SimpleForm from '../../components/simple_form'
import ModalForm from '../../components/modal_form'
export default {
  name: 'job',
  components: {
    ModalForm,
    SimpleForm
  },
  data () {
    return {
      columns: columns(this),
      inputs: inputs(this),
      msg: 'Welcome to Your Vue.js PWA',
      isEdit: false,
      formModel: false,
      initData: {},
      modelLoading: false,
      modelType: null
    }
  },
  beforeMount () {
    this.fetch()
  },
  computed: {
    ...mapState('job', ['data', 'total', 'filter'])
  },
  methods: {
    login () {
    },
    ...mapActions('job', ['fetch', 'add', 'delete']),
    sortChange (sort) {
      this.fetch({sb: sort.key, sd: sort.order})
    },
    handleAdd () {
      this.initData = {}
      this.formModel = true
    },
    pageChange (page) {
      this.fetch({curent_page: page})
    },
    pageSizeChange (pageSize) {
      this.fetch({page_size: pageSize})
    },
    async onAction (action, params) {
      if (action === 'delete') {
        this.$Notice.error({title: '失败', desc: '测试系统不可删除'})
      } else if (action === 'edit') {
        // this.initData = params.row
        // this.formModel = true
      }
    },
    async onSubmit (params) {
      if (this.initData.uid) {
      } else {
        this.add({params})
      }
      this.formModel = false
    },
    async onCancel (obj) {
      this.formModel = false
    }
  }
}
</script>
