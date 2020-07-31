const initState = {
  info: {},
  age: 1
}

export default {
  namespace: 'user',
  state: {...initState},
  reducers: {
    saveInfo: (state, {data}) => {
      state.info = data;
    },
    saveAge: (state, {data}) => {
      state.age = state.age + data;
    }
  }
};
