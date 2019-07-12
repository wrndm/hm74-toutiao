import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
// 配置路由

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    { name: 'home',
      path: '/',
      component: Home,
      children: [
        { name: 'welcome', path: '/', component: Welcome }
      ] },
    // ...很多规则
    { name: '404', path: '*', component: NotFound }
  ]
})
// 加上前置守卫
// const router = new VueRouter({})
router.beforeEach((to, from, next) => {
  // 每一次跳转路由会执行这个函数
// to 目标路由对象
// from 当前路由对象
// next 下一步 next()放行  next('./login')拦截
  if (to.path === '/login') return next()
  const user = window.sessionStorage.getItem('hm74')
  if (user) return next()
  next('./login')
})
export default router
