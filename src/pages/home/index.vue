<template>
  <div class="home">
    <Row>
    <Col class='col-card' span='12'>
      <Card>
        <p slot="title"> 商品数量 </p>
        <h3>{{item_total}}</h3>
      </Card>
    </Col>
    <Col class="col-card" span='12'>
      <Card>
        <p slot="title"> 任务数量 </p>
        <h3>{{task_total}}</h3>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  computed: {
    ...mapState('normal', ['item_total', 'task_total'])
  },
  methods: {
    ...mapActions('normal', ['get_statistics']),
    login () {
    }
  },
  mounted () {
    this.get_statistics()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .col-card{
    padding-left: 10px;
  }
</style>
