import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user')
    }
  ]
})
