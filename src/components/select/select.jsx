import React, { Component } from 'react';
import { View } from '@tarojs/components';
// import Context from './context';
import { getContext } from './context';

import './select.scss';

const Context = getContext('select-value');

export default class Select extends Component {

  // state
  state = {
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps, '-- Select nextProps --');
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // methods
  onChange (val) {
    this.props.onChange && this.props.onChange(val);
  }

  render () {
    const {value, children} = this.props;
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
