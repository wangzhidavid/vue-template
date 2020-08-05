import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './services/axios';

// 引入全局样式
import './assets/css/index.less'
// 全局引入按需引入UI库 vant
import './plugins/vant.js'


// 阻止启动生产消息
Vue.config.productionTip = false;
// 挂载全局
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
