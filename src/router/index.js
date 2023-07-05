import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login   from '@/components/login'
import Foot from '@/components/foot'
import Case from '@/components/case'
import Broadcast from '@/components/broadcast'
import Head from '@/components/head'
import Order from '@/components/order'
import Admin from '@/components/admin'
import Expert from '@/components/expert'

Vue.component('c-footer',Foot)
Vue.component('c-case',Case)
Vue.component('c-lunbo',Broadcast)
Vue.component('c-header',Head)
Vue.component('c-index',Index)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorl',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/order',
      name: 'logi',
      component: Order
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/expert',
      name: 'adm',
      component: Expert
    }
  ]
})
