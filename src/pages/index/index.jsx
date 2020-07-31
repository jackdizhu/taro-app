import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';

import './index.scss';

export default class Index extends Component {

  // state
  state = {
  }

  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  routerToList (page = 'list') {
    return function () {
      Taro.navigateTo({
        url: `../${page}/index`
      });
    };
  }

  render () {
    return (
      <View className='index'>
        <View>
          <Button onClick={this.routerToList('index').bind(this)}>index</Button>
          <Button onClick={this.routerToList('redux').bind(this)}>redux</Button>
          <Button onClick={this.routerToList('list').bind(this)}>list</Button>
          <Button onClick={this.routerToList('select').bind(this)}>select</Button>
        </View>
      </View>
    );
  }
}
