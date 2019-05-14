<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller['avatar']" width="64" height="64" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller['name'] }}</span>
        </div>
        <div class="description">{{ seller['description']}}/{{seller['deliveryTime'] }}分钟送达</div>
        <div class="support" v-if="seller['supports'].length">
          <span class="icon"></span>
          <span class="text">{{ seller['supports'][0]['description'] }}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    props: {
      seller: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin.styl"

  .header
    color: #FFFFFF
    background-color: #000000

    .content-wrapper
      display: flex
      align-items: flex-end
      padding: 24px 12px 18px 24px

      .content
        margin-left: 16px
        font-size: 14px

        .title
          display: flex
          align-items: center
          margin: 2px 0 8px 0

          .brand
            display: inline-block
            width: 30px
            height: 18px
            bg-img('brand')
            -webkit-background-size: 30px 18px
            background-size: 30px 18px
            background-repeat: no-repeat

</style>
