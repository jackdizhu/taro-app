# taro

## 记录

### 单向数据流

* React中是单向数据流，数据只能从父组件通过属性的方式传给其子组件(子元素在props.children中)

### 组件跨级传值（类似store）

* React.createContext()
```jsx
{/* 多个值使用对象，props只能是value */}
<Context.Provider value={{value: value, onChange: this.onChange.bind(this)}}>
    {children}
</Context.Provider>
```

* 无状态组件
```jsx
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
```

