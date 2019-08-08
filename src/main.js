import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false  //设置为false 以阻止vue在启动时生成生产提示

//配置应用的字体
import  './assets/js/font'  //会被webpack 进行优化
import './assets/css/base.css'
import './assets/css/user.css'

import router from './plugins/router'
import axios from './plugins/axios'

// 给Vue原型绑定一个baseurl属性，可以全局使用这个属性，方便读取后台数据
// Vue.prototype.baseurl = "http://120.27.241.60:3000"    //注册服务器的地址
Vue.prototype.baseurl = "http://localhost:3000"    //注册服务器的地址

// console.log(axios)

//注册全局过滤器
import date from './filters/date'
Vue.filter('date',date)

//注册状态管理
import store from './plugins/store'

let vm = new Vue({
  // data:{
  //   viewHeader:true,  //在根组件上添加三个自定义属性
  //   viewFooter:true,
  //   viewLoading:false
  // },    利用状态管理，将数据放到公共仓库里
  render: h => h(App),
  router,store
}).$mount('#app')

// axios.setInterceptors(vm);