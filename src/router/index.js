import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载，注入组件(组件命名用大写)
const Index = resolve => require(['@/views/index'], resolve)
const Home = resolve => require(['@/views/home'], resolve)

Vue.use(VueRouter)

const routes = [
 {path:'/',redirect:'/home',component:Index,children:[
  { path:'home', name:'home', component:Home, meta: { title: '我的主页' } },

 ]},
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
   