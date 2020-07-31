import React, { Component } from 'react';
import { View } from '@tarojs/components';
import value from './context';

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
        <value.Provider value={this.props.value}>
          {this.props.children}
        </value.Provider>
      </View>
    );
  }
}
