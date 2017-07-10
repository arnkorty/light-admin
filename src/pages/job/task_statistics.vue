<template>
  <div class="home">
    <Row>
    <Col class='col-card' span='8'>
      <Card>
        <p slot="title"> 开始 </p>
        <h3>{{task_statistics.start}}</h3>
      </Card>
    </Col>
    <Col class="col-card" span='8'>
      <Card>
        <p slot="title"> 结束 </p>
        <h3>{{task_statistics.stop}}</h3>
      </Card>
      </Col>
      <Col class="col-card" span='8'>
      <Card>
        <p slot="title"> 总结 </p>
        <h3>{{task_statistics.total}}</h3>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'task-statistics',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  computed: {
    ...mapState('job', ['task_statistics'])
  },
  methods: {
    ...mapActions('job', ['get_task_statistics']),
    login () {
    }
  },
  mounted () {
    this.get_task_statistics()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .col-card{
    padding-left: 10px;
  }
</style>
