import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '@/components/goods'
import seller from '@/components/seller'
import ratings from '@/components/ratings'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/ratings',
      component: ratings
    }
  ]
})
