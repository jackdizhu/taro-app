import React, { Component } from 'react';
import { View } from '@tarojs/components';

import './select.scss';

export default class Opction extends Component {

  // state
  state = {
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='opction-component'>
        {this.props.children}
      </View>
    );
  }
}
