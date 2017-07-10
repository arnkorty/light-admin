<template>
  <div id="app" :class="{'mobile': isMobile}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    let isMobile = false
    if (document.documentElement.clientWidth <= 768) {
      isMobile = true
    }
    return {
      isMobile
    }
  },
  beforeMount () {
    window.onresize = () => {
      if (document.documentElement.clientWidth <= 768) {
        this.isMobile = true
      }
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

