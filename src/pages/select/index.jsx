import React, { Component } from 'react';
import { View } from '@tarojs/components';
import VSelect from '@components/select/select.jsx';
import VOpction from '@components/select/opction.jsx';
// import VItem from '@components/select/item.jsx';
import VItem from '@components/select/itemFunctional.jsx';

import './index.scss';

export default class Select extends Component {

  // state
  state = {
    value: 1,
    // keyword: '',
    list: [
      {name: '内容1', id: 1},
      {name: '内容2', id: 2},
      {name: '内容3', id: 3, disabled: true},
      {name: '名称4', id: 4},
      {name: '名称5', id: 5}
    ],
    // filterList: []
  }

  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // methods
  onChange (val) {
    this.setState({
      value: val
    });
  }

  render () {
    const context = {value: this.state.value};
    return (
      <View className='select-page'>
        <VSelect value={this.state.value} onChange={this.onChange.bind(this)}>
          {
            this.state.list.map((item, index) => {
              return (
                <VOpction key={item.id} name={item.name} value={item.id} disabled={item.disabled}>
                  <VItem name={item.name} value={item.id} context={context}></VItem>
                </VOpction>
              );
            })
          }
        </VSelect>
      </View>
    );
  }
}
