<template>
  <div class="header">
    <div class="title">
      <h3>
        {{title}}
      </h3>
    </div>
    <Breadcrumb>
      <Breadcrumb-item v-for="parent in currentRouter.parent" :key="parent" :href="getHrefByName(parent)">
        {{getTextByName(parent)}}
      </Breadcrumb-item>
      <Breadcrumb-item :href="currentRouter.path">
        {{currentRouter.text}}
      </Breadcrumb-item>
    </Breadcrumb>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {allPages} from '../router/pages'
export default {
  name: 'header',
  computed: {
    ...mapGetters('common', ['title', 'currentRouter'])
  },
  methods: {
    getHrefByName (name) {
      const router = allPages[name]
      if (router) {
        return router.path
      }
    },
    getTextByName (name) {
      return allPages[name].text
    }
  }
}
</script>
<style lang="less">
  .header{
    display: flex;
    padding: 10px;
    .title{
      flex: 1;
    }
    border-bottom: 1px solid #e6e6e6;
  }
</style>

