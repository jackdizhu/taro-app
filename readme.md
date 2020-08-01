# taro

## 记录

### 组件跨级传值（类似store）

* React.createContext()
```jsx
{/* 多个值使用对象，props只能是value */}
<Context.Provider value={{value: value, onChange: this.onChange.bind(this)}}>
    {children}
</Context.Provider>
```

