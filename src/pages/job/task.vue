<template>
  <div class="users">
    <Row class="tools table">
        共有{{task_total}}条数据
    </Row>
    <Table width="auto" border :columns="columns" :data="tasks" class="data-table" @on-sort-change="sortChange"></Table>
    <Page
      class='list-page'
      :page-size="task_filter.page_size"
      :current-page="task_filter.current_page"
      :total="task_total"
      @on-change="pageChange"
      @on-page-size-change="pageSizeChange"
      show-elevator
      show-sizer></Page>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import columns from '../../columns/task'
export default {
  name: 'users',
  data () {
    return {
      columns: columns(this)
    }
  },
  beforeMount () {
    this.fetch_tasks()
  },
  computed: {
    ...mapState('job', ['tasks', 'task_total', 'task_filter'])
  },
  methods: {
    login () {
    },
    ...mapActions('job', ['fetch_tasks']),
    sortChange (sort) {
      this.fetch_tasks({sb: sort.key, sd: sort.order})
    },
    pageChange (page) {
      this.fetch_tasks({curent_page: page})
    },
    pageSizeChange (pageSize) {
      this.fetch_tasks({page_size: pageSize})
    }
  }
}
</script>
