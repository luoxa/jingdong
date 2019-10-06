import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/register',
      name: 'register',
      component: ()=>import('./views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/botnav',
      name: 'botnav',
      component: () => import('./views/Botnav.vue'),
      children:[
        {
          path: '',
          name: 'index',
          component: () => import('./views/Index.vue')
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('./views/List.vue')
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('./views/Search.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          meta:{
            requireAuth:true //声明此路由需要登录权限
          },
          component: () => import('./views/Cart.vue')
        },
        {
          path: 'mine',
          name: 'mine',
          meta:{
            requireAuth:true //声明此路由需要登录权限
          },
          component: () => import('./views/Mine.vue')
        },

      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
