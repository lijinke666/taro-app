import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '测试标题'
  }
  onClick = ()=>{

  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
    console.log(1);
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button type="primary" onClick={this.onClick}>测试</Button>
      </View>
    )
  }
}

