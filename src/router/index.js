import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import C from '../views/C.vue'
import Agent from '../views/Agent.vue'
import Details from '../views/Details.vue'
import User from '../views/User.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history', // 默认 hash 模式的URL中有#号
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home', // 命名路由
      component: Home
    },
    {
      path: '/a',
      redirect: '/b'
      // 重定向:   从 /a 重定向到 /b
    },
    {
      path: '/c',
      component: C,
      // 别名:  /c 的别名是 /d，意味着，当用户访问 /d 时，URL 会保持为 /d，但是路由匹配则为 /c，就像用户访问 /c 一样。
      alias: '/d'
    },
    {
      // 动态路径参数 以冒号开头
      path: '/user/:id',
      component: User
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/agent',
      name: 'agent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Agent.vue'),
      children: [
        {
          // 嵌套路由
          // 当 /agent/agent 匹配成功，
          // Agent 会被渲染在 agent 的 <router-view> 中
          path: 'agent',
          component: Agent
        },
        {
          // 当  /agent/details 匹配成功
          // Details 会被渲染在 agent 的 <router-view> 中
          path: 'agent-details',
          component: Details
        }
      ]
    },
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (products.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
    },
    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "users" */ '../views/User.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "users" */ '../views/SignUp.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      // route level code-splitting
      // this generates a separate chunk (users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "users" */ '../views/SignIn.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      // route level code-splitting
      // this generates a separate chunk (users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "users" */ '../views/ForgotPassword.vue')
    },
    {
      // 会匹配所有路径
      path: '*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
    }
  ]
})

export default router
