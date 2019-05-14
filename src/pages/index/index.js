import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Menu from '@/components/menu'
import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  componentDidMount(){
  }


  render () {
    return (
      <View className='index'>
        <Menu></Menu>
      </View>
    )
  }
}

export default Index
