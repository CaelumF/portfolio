import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import ChangableSidebar from './containers/ChangableSidebar';
import ContentDisplayer from './containers/ContentDisplayer';

class App extends Component {
  render() {
    return (
      <div>
        <Topbar></Topbar>
        <ChangableSidebar></ChangableSidebar>
        <ContentDisplayer></ContentDisplayer>
      </div>
    );
  }
}

export default App;
