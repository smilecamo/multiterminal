import Taro from '@tarojs/taro';
import { View, Text,Image } from '@tarojs/components';
import {connect} from '@tarojs/redux'
import menu from '@/image/menu.png'
import user from '@/image/user.png'
import './index.less'
@connect(
  function (store) { 
    return {...store.menu}
  },
  (dispatch)=>{
    return {
      onShowMenu() {
        dispatch(showDrawer())
      }
    }
  }
)
export default class Menu extends Taro.Component {
  // constructor(props){
  //   super(props)
  //   this.onShowDrawer = this.onShowDrawer.bind(this)
  // }
  // 显示抽屉
  onShowDrawer() {
    this.props.onShowMenu && this.props.onShowMenu()
  }
  render() {
    return (
      <View className='topiclist-menu'>
        <Image onClick={this.onShowDrawer.bind(this)} src={menu} className='image'></Image>
        <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
        <Image src={user} className='image'></Image>
      </View>
    );
  }
}
