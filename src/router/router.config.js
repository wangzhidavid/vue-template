/* 
  基础路由
*/
import Home from '../views/Home.vue';
export const constantRouterMap = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'about', // 页面标题
      keepAlive: false // keep-alive 标识
    }
  }
]
