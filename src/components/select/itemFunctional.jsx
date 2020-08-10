import React from 'react';
import { View, Text } from '@tarojs/components';

import './select.scss';

// 无状态组件
const Item = (props) => {
  const {name, value, context} = props;
  let isActive = context.value === value;

  return (
    <View className='item-component'>
      <Text data-value={value}>{name}</Text>
      {
        isActive && <Text className='icon'>✔</Text>
      }
    </View>
  );
};

export default Item;
