import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Header from '../components/Header'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import Follow from '../pages/Follow'
// const Follow = ()=>import('../pages/Follow');
// import Column from '../pages/Column'
import Detail from '../pages/Detail'
import User from '../pages/User'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import Error from '../pages/Error'
import Loading from '../components/Loading'
import Echarts from '../pages/Echarts'
import Bdmap from '../pages/Bdmap'

let routes = [
    {path:'/home',component:Home},
    {path:'/header',component:Header},
    {path:'/footer',component:Footer},
    {path:'/follow',component:Follow},
    // {path:'/column',component:Column},
    {path:'/column',component:r=>{require(['../pages/Column.vue'],r)}},
    {name:'detail',path:'/detail/:id',component:Detail},
    {path:'/user',component:User},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/error',component:Error},
    {path:'/loading',component:Loading},
    {path:'/echarts',component:Echarts},
    {path:'/bdmap',component:Bdmap},
    {path:'/',redirect:'/home'},
    {path:'*',component:Error},
];
let router = new VueRouter({routes})

export default router;