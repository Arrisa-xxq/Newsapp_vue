<template>
    <div class="follow">
        <List dataName='home' :list='follow'></List>
    </div>
</template>
<script>
import List from '../components/List'
import {mapGetters} from 'vuex'
export default {
    name:'follow',
    // data(){
    //     return {
    //         list:[]
    //     }
    // },
    components:{
        List
    },
    created(){
        // axios({
        //     url:'/api/home'  //follow数据表里面没有数据，所以此时拿的是home表中的数据
        // }).then(res=>this.list=res.data.data)
        this.$store.dispatch('View_follow');
    },
    computed:mapGetters([
        "follow"
    ])
}
</script>
