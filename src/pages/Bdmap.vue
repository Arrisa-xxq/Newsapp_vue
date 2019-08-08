<template>
    <div class="bdmap">
        <h3>百度地图</h3>
        <div ref="allmap" style="height:200px"></div>
        <div ref="allmap2" style="height:200px"></div>
        <input type="text" v-model='position'>
        <input type="button" value="搜索" @click='search1'>
    </div>
</template>
<script>
export default {
    data(){
        return {
            position:''
        }
    },
    methods:{
        search1(){
            this.local.search(this.position)
        }
    },
    mounted(){
       // 百度地图API功能
	var map = new BMap.Map(this.$refs.allmap);
	var point = new BMap.Point(116.404, 39.915);
	map.centerAndZoom(point, 15);
	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    
    // -----------------------------------------------------
    // 百度地图API功能
	var map2 = new BMap.Map(this.$refs.allmap2);          
	map2.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
	this.local = new BMap.LocalSearch(map2, {
		renderOptions:{map: map2}
	});
	this.local.search('参观');
    }
}
</script>
<style scoped>
    .bdmap{
        margin-top: .5rem
    }
</style>
