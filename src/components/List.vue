<template functional>
    <div class="newsList">
    <ul>
      <li v-for="item of props.list" 
        :key="item._id" 
      >
        <router-link :to="`/detail/${item._id}?dataName=${props.dataName}`">
          <h2>{{item.title}}</h2>
          <p>{{item.des}}</p>
        </router-link>
      </li>            
    </ul>
  </div>
</template>

<style>
.content .newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;margin-top: 0.6rem}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;
text-overflow:ellipsis; 
white-space:nowrap;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;text-overflow:ellipsis; 
white-space:nowrap;}
.newsList{clear: both;margin-bottom:1rem;}

</style>