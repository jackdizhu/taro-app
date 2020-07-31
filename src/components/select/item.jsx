import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import context from './context';

import './select.scss';

export default class Item extends Component {

  // state
  state = {
  }

  componentWillMount () { }

  componentDidMount () {
    console.log(this.context, '-- Item this.context --');
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  static contextType = context
  render () {
    const {name, value} = this.props;
    return (
      <View className='item-component'>
        <Text data-value={value}>{name}</Text>
      </View>
    );
  }
}
