import React, { Component } from 'react';
import { View } from '@tarojs/components';
import context from './context';
import './select.scss';

export default class Opction extends Component {
  // state
  state = {
  }

  componentWillMount () { }

  componentDidMount () {
    // console.log(this.context, '-- Opction this.context --');
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  static contextType = context
  render () {
    return (
      <View className='opction-component'>
        {this.props.children}
      </View>
    );
  }
}
