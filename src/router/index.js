import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Goods from '@/components/goods/Goods'
import Ratings from '@/components/ratings/Ratings'
import Seller from '@/components/seller/Seller'

export default new Router({
  routes:[
    {path:'/',redirect:'/goods'},
    {path:'/goods',component:Goods},
    {path:'/ratings',component:Ratings},
    {path:'/seller',component:Seller},
  ],
  mode:'history'
})
