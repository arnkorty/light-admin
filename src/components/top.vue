<template>
  <div class="top">
    <a @click.stop="handleToggleFluid" :class="{toggle: isToggle}">
      <Icon type="navicon"></Icon>
    </a>
    <div class='tool'>
    </div>
    <div class="info">
      <div class="name">
        {{user && user.nickname}}
      </div>
      <Dropdown class="avatar">
        <img>
        <Dropdown-menu slot="list">
          <Dropdown-item>
            <router-link :to="{path: '/profile'}">个人信息</router-link>
          </Dropdown-item>
          <Dropdown-item>
            <a @click="handleLogout">退出登陆</a>
          </Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'top',
  data () {
    return {
      isToggle: false
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    handleToggleFluid () {
      this.isToggle = true
      this.$emit('toggle-fluid')
    },
    handleLogout () {
      this.$store.commit('auth/LOGOUT')
    }
  }
}
</script>
<style lang="less">
  @import '../styles/iview_custom.less';
  .top{
    height: 50px;
    background: @body-background;
    padding: 0 8px;
    display: flex;
    overflow-y: hidden;
    border-bottom: 1px solid #e6e6e6;
    .tool{
      flex: 1;
    }
    .info{
      height: 100%;
      line-height: 50px;
      display: flex;
      .name{
        font-weight: bold;
        font-size: 18px;
        margin-right: 10px;
      }
      // margin-right: 10px;
      .avatar{
          img{
          border-radius: 50%;
          background: #eee;
          // margin: 0 10px;
          width: 48px;
          height: 48px;
          cursor: pointer;
        }
      }
    }
    i.ivu-icon{
      font-size: 48px;
      color: @menu-dark-title;
      transform: rotate(0deg)
    }
    .toggle i.ivu-icon{
      animation: iconrotate1 @animation-time;
    }
  }
  .fluid .top{
    i.ivu-icon{
      transform: rotate(90deg);
    }
    .toggle{
      i.ivu-icon {
        animation: iconrotate0 @animation-time;
      }
    }
  }
  @keyframes iconrotate0 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(90deg);
    }
  }
  @keyframes iconrotate1 {
    from {
      transform: rotate(90deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
</style>
