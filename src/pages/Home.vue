<template>
    <div class="home">
        <Slider :banner='banner' dataName='banner'></Slider>
        <List :list='home' dataName='home'></List>
    </div>
</template>
<script>
import Slider from '../components/Slider'
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
        Slider,List
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
