<template>
    <div class="content" v-if='user'>
    <div class="header">
      <h2><img :src="`${baseurl}${user.icon}`" alt=""/></h2>
      <div class="user-box">
        <a >{{user.nikename}}</a>&nbsp;
        <a href="javaScript:;"   @click='logout'>注销</a>
      </div>
      <ul class="clear">
        <li>
          <span>{{user.follow}}</span>
          <p>关注</p>
        </li>
        <li>
          <span>{{user.fans}}</span>
          <p class="end">粉丝</p>
        </li>
      </ul>
    </div>
    <div class="docList">
      <ul>
        <li class="gk-text">
          <i></i>
          <p>公开博文</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="mm-text">
          <i></i>
          <p>秘密博文</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="cg-text">
          <i></i>
          <p>草稿箱</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="sc-text">
          <i></i>
          <p>收藏夹</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="my_cz">
          <i></i>
          <p>收藏夹</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import '../assets/css/user.css';//全局
import router from '../plugins/router'
import store from '../plugins/store'
import {mapGetters} from 'vuex'

export default {
  // data(){
  //   return {
  //     user:{}
  //   }
  // },
  beforeRouteEnter(to,from,next){  //路由前置守卫拿不到this，可以引入路由，利用编程式跳转
    axios({
      url:'/api/user'
    }).then(
      res=>{
        // console.log('user',store.state.user.err)
        // if(res.data.err === 0){
        //   next(_this=>_this.user = res.data.data)  //路由的数据预载
        //   // console.log("111",res.data)
        // }else{
        //   // next('/login');
        //   router.push('/login')  //编程式跳转
        // }
        //拿到仓库中的数据做逻辑判断
        if(store.state.user.err == 0){
          next()
        }else{
          next("/login");
        }
      }
    )
  },  
  computed:mapGetters([
    "user"
  ]),
  methods:{
   logout(){
     axios({
       url:'/api/logout',
       method:'delete'
     }).then(
       res=>{res.data.err == 0 && this.$router.push('/login')}
       )}
   },
}
</script>
<style scoped>
  @import url('../assets/css/user.css');/*全局 */
  .user-box a{
    display: block;
    margin: -0.09rem;
  }

</style>