import React, { Component } from 'react';
import { View } from '@tarojs/components';
import VSelect from '@components/select/select.jsx';
import VOpction from '@components/select/opction.jsx';
import VItem from '@components/select/item.jsx';

import './index.scss';

export default class Select extends Component {

  // state
  state = {
    value: 1,
    // keyword: '',
    list: [
      {name: '内容1', id: 1},
      {name: '内容2', id: 2},
      {name: '内容3', id: 3},
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

  render () {
    return (
      <View className='select-page'>
        <VSelect value={this.state.value}>
          {
            this.state.list.map((item, index) => {
              return (
                <VOpction key={item.id}>
                  <VItem name={item.name} value={item.id}></VItem>
                </VOpction>
              );
            })
          }
        </VSelect>
      </View>
    );
  }
}
