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
        <div class="support" v-if="seller['supports']">
          <span class="icon" :class="iconClass"></span>
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
    data () {
      return {
        classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      }
    },
    props: {
      seller: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    computed: {
      iconClass () {
        return this.classMap[this.seller['supports'][0]['type']]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixin.styl"

  .header
    color: #FFFFFF
    background-color: #000000
    display: flex

    .content-wrapper
      display: flex
      align-items: flex-start
      padding: 24px 12px 18px 24px

      .content
        margin-left: 16px
        font-size: 14px

        .title
          display: flex
          align-items: flex-start
          margin: 2px 0 8px

          .brand
            display: inline-block
            width: 30px
            height: 18px
            bg-img('brand')
            -webkit-background-size: 30px 18px
            background-size: 30px 18px
            background-repeat: no-repeat

          .name
            margin-left: 6px
            font-size: 16px
            font-weight: bold

        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px

        .support
          display: flex
          align-items flex-start

          .icon
            display: inline-block
            width: 12px
            height: 12px
            margin-right: 4px
            -webkit-background-size: 12px 12px
            background-size: 12px 12px

            &.decrease
              bg-img('decrease_1')

            &.discount
              bg-img('discount_1')

            &.guarantee
              bg-img('guarantee_1')

            &.invoice
              bg-img('invoice_1')

            &.special
              bg-img('special_1')

          .text
            font-size: 10px
</style>
