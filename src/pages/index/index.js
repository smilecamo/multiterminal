import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
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
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index
