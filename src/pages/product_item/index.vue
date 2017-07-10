<template>
  <div class="product-items">
    <Row class="tools table">
        共有{{total}}条数据
    </Row>
    <Table :width="tableWidth" border :columns="columns" :data="data" class="data-table" @on-sort-change="sortChange"></Table>
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
import columns from '../../columns/item'
export default {
  name: 'productItem',
  data () {
    return {
      columns: columns.call(this),
      tableWidth: 1200
    }
  },
  beforeMount () {
    this.fetch()
    let main = document.getElementsByClassName('main')[0]
    if (main) {
      this.tableWidth = main.clientWidth - 20
      window.onresize = () => {
        this.tableWidth = main.clientWidth - 20
      }
    }
  },
  computed: {
    ...mapState('item', ['data', 'total', 'filter'])
  },
  methods: {
    ...mapActions('item', ['fetch', 'search']),
    sortChange (sort) {
      this.fetch({sb: sort.key, sd: sort.order})
    },
    pageChange (page) {
      this.fetch({curent_page: page})
    },
    pageSizeChange (pageSize) {
      this.fetch({page_size: pageSize})
    },
    async onAction (action, params) {
      if (action === 'delete') {
        this.delete(params.row.uid)
      } else if (action === 'edit') {
        this.initData = params.row
        this.formModel = true
      }
    }
  }
}
</script>
