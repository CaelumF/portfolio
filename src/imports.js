import App from './App';

import BalloonPage from './components/content/project_pages/BalloonPage';
import HomePage from './components/content/project_pages/BalloonPage';

import ContentDisplayer from './containers/ContentDisplayer';
import SidebarChanger from './containers/SidebarChanger';
import ChangableSidebar from './containers/ChangableSidebar';

//Sidebars
import ProjectSidebar from './components/content/sidebars/ProjectSidebar';
import ScriptsSidebar from './components/content/sidebars/ScriptsSidebar';

function getPage(pageName){
  switch (pageName) {
    case "BalloonPage":
      return BalloonPage
    default:


  }
}

export {
  getPage,
  ContentDisplayer,
  SidebarChanger,
  ProjectSidebar,
  ChangableSidebar,
  ScriptsSidebar
};
