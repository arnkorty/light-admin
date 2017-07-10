<template>
  <div id="authorized" :class="{fluid: isFluid}">
    <iMenus></iMenus>
    <div class="main" @click="handleMainClick">
        <iTop @toggle-fluid="handleToggleFluid"></iTop>
          <iHeader></iHeader>
        <div class="content">
          <router-view></router-view>
        </div>
      <iFooter></iFooter>
    </div>
  </div>
</template>

<script>
import Menus from '../components/menus'
import Header from '../components/header'
import Top from '../components/top'
import Footer from '../components/footer'
// import { mapState } from 'vuex'
export default {
  name: 'authorized',
  components: {
    iMenus: Menus,
    iHeader: Header,
    iTop: Top,
    iFooter: Footer
  },
  data () {
    return {
      isFluid: false
    }
  },
  beforeMount () {
    this.$store.dispatch('auth/get_profile')
  },
  mounted () {
    if (document.body.clientWidth <= 440) {
      this.isFluid = true
    }
  },
  methods: {
    handleToggleFluid () {
      this.isFluid = !this.isFluid
    },
    handleMainClick () {
      if (document.body.clientWidth <= 440 && !this.isFluid) {
        this.isFluid = true
      }
    }
  }
}
</script>
<style lang="less">
  @import '../styles/iview_custom.less';
  #authorized{
    display: flex;
    position: relative;
    will-change: width;
    height: 100%;
    .content{
      padding: 10px
    }
  }
  .menus{
    width: @menus-nav-width;
  }
  .main{
    flex: 1;
    box-shadow: @shadow-left;  //0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
    background: @background-color-base;
    position: absolute;
    left: @menus-nav-width;
    right: 0;
    transition: width @transition-time;
    bottom: 0;
    top: 0;
  }
</style>
