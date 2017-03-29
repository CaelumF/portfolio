import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/All.css';
import Topbar from './Topbar';
import ChangableSidebar from './containers/ChangableSidebar';
import ContentDisplayer from './containers/ContentDisplayer';
import GithubWidget from '../node_modules/github-card/src/widget.js'
window.GithubWidget = GithubWidget
class App extends Component {
  render() {
    return (
      <div className="All">
        <Topbar></Topbar>
        <ChangableSidebar></ChangableSidebar>
        <ContentDisplayer defaultPage="aboutPage"></ContentDisplayer>
      </div>
    );
  }
}

export default App;
