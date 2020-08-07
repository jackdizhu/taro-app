import React from 'react';

const context = React.createContext();

export default context;

// context 构造器
const $Context = {};
export const getContext = function (str) {
  if (typeof str !== 'string' || str === '') {
    throw new Error('argument[0] is not string or is empty');
  } else {
    return $Context[str] || ($Context[str] = React.createContext());
  }
};
