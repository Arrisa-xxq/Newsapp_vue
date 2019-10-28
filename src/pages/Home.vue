<template>
    <div class="home">
        <!-- <Slider :banner='banner' dataName='banner'></Slider> -->
        <swipe class="my-swipe">
            <swipe-item class="slide1" v-for="item of banner"
                    :key="item._id">
                <ul class="clearfix">
                    <router-link tag='li' :to="`/detail/${item._id}?dataName=banner`" 
                    >
                        <img :src="`${baseurl}${item.img}`" alt=""/>
                        <div class="text-box">
                        <h2>{{item.title}}</h2>
                        <p>{{item.auth}}</p>
                        </div>
                    </router-link>
                </ul>
            </swipe-item>
            <!-- <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item> -->
        </swipe>
        <List :list='home' dataName='home'></List>
    </div>
</template>
<script>
// import Slider from '../components/Slider'
import { Swipe, SwipeItem } from 'vue-swipe';
import List from '../components/List'
import Axios from 'axios';
import {mapGetters} from 'vuex' 
export default {
    name:'home',
    // data(){
    //     return {
    //         list:[],
    //         banner:[]
    //     }
    // },
    components:{
        List,
        'swipe':Swipe,
        'swipe-item':SwipeItem
    },
    activated(){
        // console.log('home',axios)
        // axios({
        //     url:'/api/home',
        //     params:{_limit:6,_page:1},
        // }).then(res=>this.list = res.data.data)
        //并行无关联
        this.$store.dispatch('View_home') //components--> actions
        this.$store.dispatch("View_banner")
        // axios({
        //     url:'/api/banner',
        //     // params:{_limit:6,_page:1}
        // }).then(res=>this.banner = res.data.data)
    },
    computed:mapGetters([  //找getters
        "home","banner"
    ])
}
</script>
<style scoped>
@import url('../../node_modules/vue-swipe/dist/vue-swipe.css');
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top:.4rem
}
 
/* .slide1 {
  background-color: #0089dc;
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
} */
.content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
.content .banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1}
 ul li{width:6.4rem;float:left;position: relative;}
 ul li img{width:100%; display:block;margin-top:0.6rem}
 ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}

 ol{position:absolute; right:0.2rem;bottom:0.2rem;}
 ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
 ol li.active{ background:#fff;}
</style>