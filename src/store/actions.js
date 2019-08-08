import axios from "../plugins/axios";

let actions = {
    VIEW_bHeader:({commit},payload)=>commit('VIEW_bHeader',payload),
    VIEW_bFooter:({commit},payload)=>commit('VIEW_bFooter',payload),
    VIEW_bLoading:({commit},payload)=>commit('VIEW_bLoading',payload),

    //通过axios获取数据，统一进行业务处理
    View_home:({commit})=>{
        axios({
            url:'/api/home',
            parmas:{_limit:6,_page:1}
        }).then(
            res=>commit('View_home',res.data.data)
        )
    },    
    View_follow:({commit})=>{
        axios({
            url:'/api/home'
        }).then(
            res=>commit('View_follow',res.data.data)
        )
    },
    View_column:({commit})=>{
        axios({
            url:'/api/column'
        }).then(
            res=>commit('View_column',res.data.data)
        )
    },
    View_banner:({commit})=>{
        axios({
            url:'/api/banner'
        }).then(
            res=>commit('View_banner',res.data.data)
        )
    },
    View_detail:({commit},{type,payload})=>{
        // console.log('view-detail',payload)
        axios({
            url:`/api/${payload.dataName}/${payload.id}`//通过dispatch传过来的是个对象，包含两个键值对，type，payload都要解出来，然后拿到payload中的dataName和id  
        }).then(
            res=>{console.log(res)
                commit('View_detail',res.data.data)
        
        }
        )
    },
    //直接将用户数据存到前端仓库
    // View_user: async ({commit})=>{
    //     let res = await axios({url:'/api/user'})
    //     commit("View_user",res.data.data)
    // },
}
export default actions;