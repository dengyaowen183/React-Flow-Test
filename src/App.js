
import React, { Component } from 'react';

/***Flow( Module Types )检查(exports,imports)***/
/***import 的 模块必须也在Flow检查的范围内***/
import IgnoreTest from './IgnoreTest';


import './App.css';
class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        My App
        <IgnoreTest msg={'hahaha'}  />
      </div>
    );
  }
}
export default App;
