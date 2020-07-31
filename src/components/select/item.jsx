import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';

import './select.scss';

export default class Item extends Component {

  // state
  state = {
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {name, value} = this.props;
    return (
      <View className='item-component'>
        <Text data-value={value}>{name}</Text>
      </View>
    );
  }
}
