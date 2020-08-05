import Vue from 'vue';
import VueRouter from 'vue-router';
import {constantRouterMap} from "./router.config.js"
Vue.use(VueRouter);
// add route path
constantRouterMap.forEach(route => {
  route.path = route.path || `/${route.name || ''}`;
});
const router = new VueRouter({
  // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
  // base: process.env.BASE_URL,
  routes: constantRouterMap,
  scrollBehavior() {    // scrollBehavior，来管理组件滚动行为
    return {x: 0, y: 0}
  }
});

// 需要增加错误的处理逻辑？？？
// 在VUE中路由遇到Error: Avoided redundant navigation to current location:报错显示是路由重复，
// 虽然对项目无影响，但是看到有红的还是不舒服。
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router;
