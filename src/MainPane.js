import React, {Component} from 'react';
import './css/MainPane.css';
import { stores } from './stores/GlobalStore';
import AnimateOnChange from 'react-animate-on-change'

import AboutContent from './components/content/AboutContent';

import BalloonPage from './components/content/project_pages/BalloonPage';
import GazpachoPage from './components/content/project_pages/GazpachoPage';
import CbotPage from './components/content/project_pages/CbotPage';

import ContactPage from './components/content/ContactPage';
import PortfolioPage from './components/content/project_pages/PortfolioPage';

import AboutPage from './components/content/about_pages/AboutPage';
import CoderdojoPage from './components/content/about_pages/CoderdojoPage';
import CVPage from './components/content/about_pages/CV';
import LettersOfRec from './components/content/about_pages/LettersOfRec'

import KotlinSPage from './components/content/script_pages/KotlinSPage';
import PythonSPage from './components/content/script_pages/PythonSPage';
// import CbotPage from './components/content/project_pages/CbotPage';


//import CbotPage from './components/content/project_pages/CbotPage';

let contentPageNameMap = {
  balloonPage: <BalloonPage></BalloonPage>,
  gazpachoPage: <GazpachoPage></GazpachoPage>,
  cbotPage: <CbotPage></CbotPage>,

  contactPage: <ContactPage></ContactPage>,
  coderdojoPage: <CoderdojoPage></CoderdojoPage>,
  cvPage: <CVPage></CVPage>,
  aboutPage: <AboutPage></AboutPage>,
  lettersOfRec: <LettersOfRec></LettersOfRec>,

  portfolioPage: <PortfolioPage></PortfolioPage>,
  kotlinSPage: <KotlinSPage></KotlinSPage>,
  pythonSPage: <PythonSPage></PythonSPage>,
};

export default class MainPane extends Component{
  render(){
    return(
      <div className="MainPane">
        <AnimateOnChange
           animate={true}
           baseClassName="content"
           animationClassName={this.props.loadingPage !== this.props.currentPage ? "newContentSlide" : "contentSlideIn"}>
           {/*Trigger update when new page tries to load */}
           <div style={{display: 'none'}}>{this.props.loadingPage}</div>

           {contentPageNameMap[this.props.currentPage]}

        </AnimateOnChange>
      </div>
    );
  }
}

MainPane.defualtProps = {
  currentPage: "balloonPage",
  currentLoadingPage: "balloonPage",
}
