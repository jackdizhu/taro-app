import React, { Component } from 'react';
import { View } from '@tarojs/components';

import './select.scss';

export default class Select extends Component {

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
      <View className='select-component'>
        {this.props.children}
      </View>
    );
  }
}
