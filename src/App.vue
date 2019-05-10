<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab border-1px">
      <router-link class="tab-item" to="/goods" active-class="active">商品</router-link>
      <router-link class="tab-item" to="ratings" active-class="active">评论</router-link>
      <router-link class="tab-item" to="/seller" active-class="active">商家</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import vHeader from '@/components/header'
  import {getSeller} from '@/api'

  export default {
    name: 'App',
    created () {

    },
    methods: {
      async _getSeller () {
        let res = await getSeller()
        console.log(res)
      }
    },
    components: {
      vHeader
    }
  }
</script>

<style lang="stylus" scoped>
  @import './common/stylus/mixin'

  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      align-items: center
      border-1px(rgba(7, 17, 27, 0.1))

      &-item
        display: flex
        align-items: center
        justify-content: center
        flex: 1
        height: 100%
        font-size: 14px
        color: rgba(77, 85, 93, 1)

        &.active
          color: rgb(240, 20, 20)
</style>
