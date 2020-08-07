import React, { Component } from 'react';
import { View } from '@tarojs/components';
// import context from './context';
import { getContext } from './context';
import './select.scss';

const context = getContext('select-value');

export default class Opction extends Component {
  // state
  state = {
  }

  componentWillMount () { }

  componentDidMount () {
    // DOMSubtreeModified DOM子元素修改
    this.opction && this.opction.addEventListener('DOMSubtreeModified', (event) => {
      if (event.target === this.opction.childNodes[0]) {
        console.log(`Opction: props.value is ${this.props.value} onChanged`);
      }
    }, false);
    // console.log(this.context, '-- Opction this.context --');
  }

  // componentWillReceiveProps (nextProps) {
  //   console.log(nextProps, '-- Opction nextProps --');
  // }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // methods
  onChange () {
    if (!this.props.disabled && this.context.onChange) {
      this.context.onChange(this.props.value);
    }
  }

  static contextType = context
  render () {
    const {value, disabled, children} = this.props;
    let activeClass = this.context.value === value ? 'opction-component-active ' : '';
    let disableClass = disabled ? 'opction-component-disabled ' : '';
    return (
      <View ref={(ref => this.opction = ref)} className={'opction-component ' + activeClass + disableClass} onClick={this.onChange.bind(this)}>
        {children}
      </View>
    );
  }
}
