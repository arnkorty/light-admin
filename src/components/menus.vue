<template>
  <div class="menus">
    <div class="logo" @click="handleClickLogo">
      <img src="../assets/logo.png">
      <h3>管理后台</h3>
    </div>
    <div class="menus-container">
      <Menu width="auto" accordion>
        <Submenu name="menu.name" v-for="menu in menus" :key="menu.name" :class="{'not-child': !menu.children}">
          <template slot="title">
            <router-link :to="menu.path">
              <Icon :type="menu.icon" v-if="menu.icon"></Icon>
              <span class='menu-link-text'>
              {{menu.text}}
              </span>
            </router-link>
          </template>
          <Menu-Item :name="child.name" v-for="child in menu.children" :key="child.name">
            <router-link :to="child.path">
              <Icon :type="child.icon" v-if="menu.icon"></Icon>
              {{child.text}}
            </router-link>
          </Menu-Item>
        </Submenu>
      </Menu>
    </div>
  </div>
</template>

<script>
import { getCurrentMenus } from '../utils'
import { mapState } from 'vuex'
export default {
  name: 'menus',
  computed: {
    ...mapState({
      menus: (state) => getCurrentMenus(state.auth.user)
    })
  },
  methods: {
    handleClickLogo () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less">
  @import '../styles/iview_custom.less';
  .menus{
    transition: all @transition-time;
    overflow-x: hidden;
    .logo,.menus-container{
      width: @menus-content-width;
    }
    .logo{
      display: flex;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 5px;
      line-height: 50px;
      cursor: pointer;
      h3 {
        font-size: 28px;
        margin-left: 10px;
      }
      img {
        height: 50px;
        width: 50px;
        transition: all @transition-time;
      }
    }
    .ivu-menu{
      background: none;
      .ivu-menu-submenu,.ivu-menu-item{
        display: block;
        margin: 0;
      }
      .ivu-menu-item{
        padding: 0;
        a{
          display: block;
          padding: 12px 32px;
        }
        i {
          font-size: 20px;
        }
        line-height: 20px;
        transition: all @transition-time;
      }
      .ivu-menu-submenu-title{
        padding: 0;
        display: flex;
         & > a{
          padding: 5px 5px 5px 12px;
          flex: 1;
          display: block; 
        }
        font-size: 18px;
        & > i{
          display: block;
        }
        i{
          transition: all @transition-time;
          font-size: 24px;
        }
      }
        .not-child {
          .ivu-menu-submenu-title-icon{
            display: none;
          }
      }
      .ivu-menu-item-selected {
        background: @background-color-base;
      }

      a.router-link-exact-active{
          color: @menus-active-color;
      }
    }
  }
  .fluid {
    .main{
      left: @menus-nav-width-min;
      @media(max-width: @screen-xs) {
        left: 0
      }
    }
    .menus{
      .menu-link-text{
        display: none;
      }
      width: @menus-nav-width-min;
      @media(max-width: @screen-xs) {
        width: 0;
      }
      .logo img {
        height: 40px;
        width: 40px;
      }
      .ivu-menu{
        .ivu-menu-submenu-title{
          i {
            font-size: 36px;
            margin-left: 2px;
            margin-right: 15px;
          }
        }
        .ivu-menu-item {
          a{
            padding-left: 18px;
          }
          i {
            margin-right: 18px;
          }
        }
      }
    }
  }
</style>

