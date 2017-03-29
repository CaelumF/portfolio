import React, {Component} from "react";
import "./css/Topbar.css";
import TBTab from "./TBTab.js";
import aboutImage from "./images/aboutTab.png";
import projectImage from "./images/projectTab.png";
import scriptImage from "./images/scriptTab.png";

import TabChanger from './containers/TabChanger'

export default class Topbar extends Component{
  render(){
    return(
      <div className="Topbar">
        <div className="tabs">
          <TabChanger image={projectImage} text="Projects"></TabChanger>
          <TabChanger image={scriptImage} text="Scripts"></TabChanger>
          <TabChanger image={aboutImage} text="About Me"></TabChanger>
        </div>
      </div>
    );
  }
}
