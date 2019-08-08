<template>
 <div class="newsList">
   <!-- {{list}} -->
    <ul>
      <li
        v-for="item of column"
        :key="item._id"
      >
        <router-link
          :to="{name:'detail',params:{id:item._id},query:{dataName:'column'}}"
        >
          <h2>{{item.title}}</h2>
          <p>{{item.des}}</p>
        </router-link>
      </li>  
    </ul>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name:"column",
  // data(){
  //   return {
  //     list:[]
  //   }
  // },
  created(){
    // axios({
    //   url:'/api/column'
    // }).then(
    //   res=>
    //   // console.log(res.data.data)
    //   this.list = res.data.data
    // )
    this.$store.dispatch('View_column')
  },
  computed:mapGetters([
    "column"
  ])
}
</script>

<style>
.content .newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;margin-top:0.6rem}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
.newsList{clear: both;margin-bottom:1rem;}

</style>
