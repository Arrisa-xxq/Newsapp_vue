//返回改变后的state状态，决定返回的数据
let getters = {
    bHeader:(state)=> {return state.bHeader;},
    bFooter:(state)=> {return state.bFooter;},
    bLoading:(state)=> {return state.bLoading;},
    home:(state)=> {return state.home;},
    column:(state)=> {return state.column;},
    follow:(state)=> {return state.follow;},
    banner:(state)=> {return state.banner;},
    detail:(state)=> {return state.detail;},
    user:(state)=> {return state.user.data;}
}
export default getters;