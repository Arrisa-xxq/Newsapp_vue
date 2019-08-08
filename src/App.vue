<template>
  <div id="app">
    <Loading v-show='bLoading'></Loading>
    <Header v-show='bHeader'></Header>
    <keep-alive :exclude="['Detail']">
    <router-view></router-view>
    </keep-alive>
   <Footer v-show='bFooter' ></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Loading from './components/Loading'
import { mapState } from 'vuex'
export default {
  name: 'app',
  watch:{   //因为app组件永远不会被卸载，所以对他进行数据观测，当有组件被挂载卸载时写业务逻辑
    $route({path}){  //解构赋值，拿到每个组件中的path
      // console.log("app",path)
      // home/follow/column true true
      // user/detail false  false
      // login/reg  false  true

      if(/home|follow|column/.test(path)){
        // this.$root.$data.viewHeader = true;
        // this.$root.$data.viewFooter = true;
        this.$store.dispatch('VIEW_bHeader',true);
        this.$store.dispatch('VIEW_bFooter',true);
      }
      if(/detail|login|echarts/.test(path)){
        // this.$root.$data.viewHeader = false;
        // this.$root.$data.viewFooter = false;
        this.$store.dispatch('VIEW_bHeader',false);
        this.$store.dispatch('VIEW_bFooter',false);
      }
      if(/user|bdmap/.test(path)){
        this.$store.dispatch('VIEW_bHeader',false);
        this.$store.dispatch('VIEW_bFooter',true);
      }
    },
    immediate: true
  },
  components: {
    Header,Home,Footer,Loading
  },
  mounted(){
    this.$store.dispatch('VIEW_bHeader','VIEW_bFooter','VIEW_bLoading')
  },
  computed:mapState([
    'bFooter','bHeader','bLoading'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
