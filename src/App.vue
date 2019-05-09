<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="ratings">评论</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import vHeader from '@/components/header'

  export default {
    name: 'App',
    components: {
      vHeader
    }
  }
</script>

<style lang="stylus">
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      align-items: center
      &-item
        flex:1
        text-align: center
</style>
