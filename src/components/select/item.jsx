import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
// import context from './context';
import { getContext } from './context';

import './select.scss';

const context = getContext('select-value');

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
    let isActive = this.context.value === value;
    return (
      <View className='item-component'>
        <Text data-value={value}>{name}</Text>
        {
          isActive && <Text className='icon'>✔</Text>
        }
      </View>
    );
  }
}
