import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import request from '@utils/request';

import './index.scss';

export default class List extends Component {

  // state
  state = {
    keyword: '',
    list: [],
    filterList: []
  }

  componentWillMount () { }

  componentDidMount () {
    this.init();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // methods
  itemOnClick (item) {
    console.log(this.state.list.find(li => li.name === item.name), 'itemOnClick');
    return function (event) {
      console.log(event, 'return itemOnClick');
    };
  }
  promiseAdd () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 1500);
    });
  }
  httpGetData () {
    let list = [
      {name: '内容1', id: 1},
      {name: '内容2', id: 2},
      {name: '内容3', id: 3},
      {name: '名称4', id: 4},
      {name: '名称5', id: 5}
    ];
    Taro.showLoading();
    request('http://192.168.199.68:10086/pages/index/index', {name: 'test'}, 'POST')
      .then(res => {
        this.setState({
          list: list,
          filterList: list
        });
        Taro.hideLoading();
      })
      .catch(err => {
        Taro.hideLoading();
      });
  }
  init () {
    let list = [
      {name: '内容1', id: 1},
      {name: '内容2', id: 2},
      {name: '内容3', id: 3},
      {name: '名称4', id: 4},
      {name: '名称5', id: 5}
    ];
    this.promiseAdd().then(res => {
      this.setState({
        list: list,
        filterList: list
      });
      Taro.hideLoading();
    });
  }
  getVal (event) {
    return typeof event === 'string' ? event : event.currentTarget.value;
  }
  getFilterList (event) {
    let value = this.getVal(event);
    console.log(event, '-- getFilterList --');
    if (value === this.state.keyword) {
      return false;
    }
    let arr = [];
    if (value === '') {
      arr = this.state.list;
    } else {
      arr = this.state.list.filter(item => item.name.indexOf(value) !== -1);
    }
    this.setState({
      keyword: value,
      filterList: arr
    });
  }

  render () {
    return (
      <View className='list-page'>
        <View>
          {
            this.state.filterList.map((item, index) => {
              return (
                <View key={item.id}>
                  <Button className='add_btn' onClick={this.itemOnClick(item).bind(this)}>{item.name}</Button>
                  <Text>{item.name}</Text>
                </View>
              );
            })
          }
        </View>
      </View>
    );
  }
}
