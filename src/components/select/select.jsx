import React, { Component } from 'react';
import { View } from '@tarojs/components';
import Context from './context';

import './select.scss';

export default class Select extends Component {

  // state
  state = {
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps, '-- Select nextProps --')
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // methods
  onChange (val) {
    this.props.onChange && this.props.onChange(val)
  }

  render () {
    const {value, children} = this.props
    return (
      <View className='select-component'>
      {/* 多个值使用对象，props只能是value */}
        <Context.Provider value={{value: value, onChange: this.onChange.bind(this)}} value-test={{'value-test': value}}>
          {children}
        </Context.Provider>
      </View>
    );
  }
}
