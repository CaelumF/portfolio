import React, {Component} from 'react';
import './css/Sidebar.css';
import SidebarItem from './SidebarItem'
import SidebarChanger from './containers/SidebarChanger';
import ProjectSidebar from './components/content/sidebars/ProjectSidebar';
import ScriptsSidebar from './components/content/sidebars/ScriptsSidebar';
import AboutSidebar from './components/content/sidebars/AboutSidebar';
import AnimateOnChange from 'react-animate-on-change'

function getItemList(tab){
  switch (tab) {
    case "Projects":
      return [ProjectSidebar]
    case "Scripts":
      return [ScriptsSidebar]
    case "About":
        return [AboutSidebar]
    default:
      return [AboutSidebar]
  }
}

const Sidebar =(props) =>(
  <AnimateOnChange
    animate={true}
    baseClassName="Sidebar"
    animationClassName="flipped">
    <div className="flippable">
      <figure>
        {getItemList(props.activeTab).map(function(listItem){
          return listItem
        })}
      </figure>
    </div>
  </AnimateOnChange>
)

export default Sidebar;
