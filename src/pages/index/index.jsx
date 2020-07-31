import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'
import request from '@utils/request'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/icon.scss";
import './index.scss'

@connect(
  ({ user }) => ({
    age: user.age
  }), 
  (dispatch) => ({
    add (num) {
      dispatch({type: 'user/saveAge', data: 1})
    },
    dec () {
      dispatch({type: 'user/saveAge', data: -1})
    }
  })
)
export default class Index extends Component {

  // state
  state = {
    sex: 1,
    keyword: '',
    list: [],
    filterList: []
  }

  componentWillMount () { }

  componentDidMount () {
    this.init()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // methods
  itemOnClick (item) {
    console.log(this.state.list.find(li => li.name === item.name), 'itemOnClick')
    return function (event) {
      console.log(event, 'return itemOnClick')
    }
  }
  promiseAdd () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1)
      }, 1500)
    })
  }
  asyncAdd () {
    this.promiseAdd().then(res => {
      this.props.add(res)
    })
  }
  httpGetData () {
    let list = [
      {name: '内容1', id: 1},
      {name: '内容2', id: 2},
      {name: '内容3', id: 3},
      {name: '名称4', id: 4},
      {name: '名称5', id: 5}
    ]
    Taro.showLoading()
    request('http://192.168.199.68:10086/pages/index/index', {name: 'test'}, 'POST')
      .then(res => {
        this.setState({
          list: list,
          filterList: list
        })
        Taro.hideLoading()
      })
      .catch(err => {
        Taro.hideLoading()
      })
  }
  init () {
    let list = [
      {name: '内容1', id: 1},
      {name: '内容2', id: 2},
      {name: '内容3', id: 3},
      {name: '名称4', id: 4},
      {name: '名称5', id: 5}
    ]
    this.promiseAdd().then(res => {
      this.setState({
        list: list,
        filterList: list
      })
      Taro.hideLoading()
    })
  }
  getVal (event) {
    return typeof event === 'string' ? event : event.currentTarget.value
  }
  getFilterList (event) {
    let value = this.getVal(event)
    console.log(event, '-- getFilterList --')
    if (value === this.state.keyword) {
      return false
    }
    let arr = []
    if (value === '') {
      arr = this.state.list
    } else {
      arr = this.state.list.filter(item => item.name.indexOf(value) !== -1)
    }
    this.setState({
      keyword: value,
      filterList: arr
    })
  }
  routerToList () {
    Taro.navigateTo({
      url: '../list/index'
    });
  }

  render () {
    return (
      <View className='index'>
        <View>
          {
            this.state.filterList.map((item, index) => {
              return (
              <Button className='add_btn' key={item.id} onClick={this.itemOnClick(item).bind(this)}>{item.name}</Button>
              )
            })
          }
        </View>
        <Input value={this.state.keyword} onInput={this.getFilterList.bind(this)}></Input>
        <Button onClick={this.routerToList.bind(this)}>{this.state.sex}</Button>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.asyncAdd.bind(this)}>async</Button>
        <View><Text>{this.props.age}</Text></View>
        <View><Text>----------------</Text></View>
        <View>
          {
            this.state.filterList.map((item, index) => {
              return (
              <AtButton className='add_btn' key={item.id} onClick={this.itemOnClick(item).bind(this)}>{item.name}</AtButton>
              )
            })
          }
        </View>
        <AtInput value={this.state.keyword} onChange={this.getFilterList.bind(this)}></AtInput>
        <AtButton onClick={this.routerToList.bind(this)}>{this.state.sex}</AtButton>
        <AtButton className='add_btn' onClick={this.props.add}>+</AtButton>
        <AtButton className='dec_btn' onClick={this.props.dec}>-</AtButton>
        <AtButton className='dec_btn' onClick={this.asyncAdd.bind(this)}>async</AtButton>
        <View><Text>{this.props.age}</Text></View>
      </View>
    )
  }
}
