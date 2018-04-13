import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import userDetail from '@/components/user_detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/user_detail',
      name: 'user_detail',
      component: userDetail
    },

  ]
})
