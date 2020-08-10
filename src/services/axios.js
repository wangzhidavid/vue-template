'use strict'

import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'
import qs from 'qs'
import commonFunction from "../utils/commonFunction"
import { baseApi } from '../config/index'    // normal

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.use(Toast);
// 配置接口地址值信息  normal
const config = {
  baseURL: baseApi, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000// request timeout
}
const http = axios.create(config)
http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
      // 默认参数
    Toast.loading({
      duration: 0,
      message: '加载中...',
      forbidClick: true,
      // overlay: true
    });
    var defaults = {}
    // 防止缓存，GET请求默认带_t参数
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        ...{ '_t': new Date().getTime() }
      }
    }
    if (commonFunction.judgment_type(config.params)  === "[object Object]") {
      config.params = {
        ...defaults,
        ...config.params
      }
    }
    if (commonFunction.judgment_type(config.data) === "[object Object]") {
      config.data = {
        ...defaults,
        ...config.data
      }
      if (/^application\/x-www-form-urlencoded/.test(config.headers['content-type'])) {
        config.data = qs.stringify(config.data)
      }
    }
    console.log("config", config);
    return config
  },
  function (error) {
    // Do something with request error
    Toast.fail({
      message: error.message,
      duration: 3000
    });
    return Promise.reject(error)
  }
)

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    console.log("response_test", response);
    // #注意此处和后台约定好请求接口失败的返回的错误码0 
    if (response.data['code'] === 0) {
      Toast.fail({
        message: response.data["msg"],
        duration: 3000
      })
      return Promise.reject(response.data["msg"])
    }else {
      Toast.clear(false);
    }
    console.log("response", response.data)
    return response.data.data;
  },
  function (error) {
    // Do something with response error
    console.log("error", error);
    Toast.fail({
      message: error.message,
      duration: 3000
    });
    // this.$router
    return Promise.reject(error)
  }
)

// 未知含义？？？
// Plugin.install = function (Vue) {
//   Vue.axios = http
//   window.axios = http
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get () {
//         return http
//       }
//     },
//     $axios: {
//       get () {
//         return http
//       }
//     }
//   })
// }
// Vue.use(Plugin)
export default http;
