<template>
  <div id="app" :class="{'mobile': isMobile}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isMobile: document.documentElement.clientWidth <= 768
    }
  },
  beforeMount () {
    window.onresize = () => {
      this.isMobile = document.documentElement.clientWidth <= 768
    }
  }
}
</script>
<style lang="less">
@import '../node_modules/iview/src/styles/custom.less';
@import './styles/iview_custom.less';
@import '../node_modules/iview/src/styles/mixins/index.less';
@import '../node_modules/iview/src/styles/common/index.less';
@import '../node_modules/iview/src/styles/animation/index.less';
@import '../node_modules/iview/src/styles/components/index.less';
@import "./styles/common.less";
html,body,#app{
  height: 100%;
}
</style>

