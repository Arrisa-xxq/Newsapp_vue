//做突变，改变state的状态的唯一方法
let mutations={
    VIEW_bHeader:(state,payload)=>state.bHeader = payload,
    VIEW_bFooter:(state,payload)=>state.bFooter = payload,
    VIEW_bLoading:(state,payload)=>state.bLoading = payload,
    View_home:(state,payload)=>{state.home = payload},    
    View_follow:(state,payload)=>{state.follow = payload},
    View_column:(state,payload)=>{state.column = payload},
    View_banner:(state,payload)=>{state.banner = payload},
    View_detail:(state,payload)=>{state.detail = payload},
    View_user:(state,payload)=>{state.user = payload},
}
export default mutations;