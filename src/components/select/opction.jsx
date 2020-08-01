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

  // methods
  onChange () {
    if (!this.props.disabled && this.context.onChange) {
      this.context.onChange(this.props.value)
    }
  }

  static contextType = context
  render () {
    const {value, disabled, children} = this.props
    let activeClass = this.context.value === value ? 'opction-component-active ' : ''
    let disableClass = disabled ? 'opction-component-disabled ' : ''
    return (
      <View className={'opction-component ' + activeClass + disableClass} onClick={this.onChange.bind(this)}>
        {children}
      </View>
    );
  }
}
