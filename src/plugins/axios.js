import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$axios=axios;
// console.log('axios',store) //not defined
import store from './store'

// axios.setInterceptors=(vm)=>{
// 拦截器业务
// 添加一个请求的拦截器
axios.interceptors.request.use(function (config) {
    // 做点事
    // console.log("请求的拦截器",vm.$data)
    // vm.$data.viewLoading = true;
    // console.log(this.$store) //拿不到this.$store
    // store.dispatch('VIEW_bLoading',true)
    store.commit('VIEW_bLoading',true) //actions没有业务逻辑。可以直接跳过交给mutations
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// 添加一个响应的拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    // console.log("响应的拦截器",vm.$data)
    // vm.$data.viewLoading = false;
    store.dispatch('VIEW_bLoading',false)
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });




// console.log(axios)
window.axios = axios;
export default axios