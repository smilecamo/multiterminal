const MENU_STATE = {
  cataData:[
    {key:'new',value:'最新消息'},
    {key:'theme',value:'主题'},
  ],
  currentCata:{
    key: 'new', value: '最新消息'
  },
  showDrawer:false
}

export default function menu(state = MENU_STATE, action) {
  switch(action.type){
    // 显示菜单抽屉
    case 'showDrawer':
      return {...state,showDrawer:true}
    // 隐藏菜单抽屉
    case 'hideDrawer':
      return {...state,showDrawer:false}
    // 点击抽屉,触发切换分类
    case 'changeCata':
      return {...state,currentCata:action.currentCata}
    default:
      return {...state}
  }
}