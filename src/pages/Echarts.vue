<template>
    <div class="echarts">
        <h3>echarts</h3>
        <div ref="echarts" style="height:400px;"></div>
        <div ref="echarts2" style="height:400px;"></div>
        <div ref="echarts3" style="height:400px;"></div>
        <router-link to="/bdmap"><input type="button" value="搜索周边" class="search" ></router-link>
        
    </div>
</template>
<script>
import echarts from 'echarts'
import { setTimeout } from 'timers';
export default {
    mounted(){
        this.myChart = echarts.init(this.$refs.echarts); //存到当前组件的自定义实例属性上
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量','质量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            },{
                name: '质量',
                type: 'bar',
                data: [5, 11, 36, 10, 10, 20]
            }]
        };
            
        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(option);
        this.myChart.on('click', function (params) {
            window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
        });
// -----------------------------------------------------

        this.myChart2 = echarts.init(this.$refs.echarts2); //存到当前组件的自定义实例属性上
        // 指定图表的配置项和数据
        
        var option2 = {
            backgroundColor: '#2c343c',
            series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ],
            roseType: 'angle',
            itemStyle: {
                normal: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
        };
        // 使用刚指定的配置项和数据显示图表。
        this.myChart2.setOption(option2);

// -----------------------------------------------------------

        this.myChart3 = echarts.init(this.$refs.echarts3); //存到当前组件的自定义实例属性上
        this.myChart3.setOption({
            title: {
                text: '异步数据加载示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: []
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: []
            }]
        });
        axios({
            url:'/data/echarts.json'
        }).then(
            res=>{
                setTimeout(()=>{this.myChart3.setOption(res.data);},1000)
            }
        )
    }
}
</script>
<style scoped>
    .search{
        margin-bottom: 1rem;border: 1px solid #000; color: cornflowerblue;line-height: .5rem;border-radius: .05rem;padding: 0 .05rem;cursor: pointer;
    }
</style>
