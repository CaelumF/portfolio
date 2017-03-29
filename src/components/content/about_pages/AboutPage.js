import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import GithubWidget from '../../../../node_modules/github-card/src/widget.js'
import AboutPageCSS from '../../../css/AboutPage.css'

class AboutPage extends Component{
  
  render(){
    return(
      <div>
        <div className="hubby">
          <div className="github-widget cMedia" data-username="CaelumF"></div>
        </div>
        <pre>
    <p>
{`
Hi, I'm Caelum Forder. I'm 17 years old, and I have been programming for the last 5 years.
You can find some of my projects on this site along with their github links.


I love to make things — through photo manipulation, design, game development and
even physical mediums — though programming is by far my favourite way to make things;
through it I can easily create things that behave to my exact specification without
the need of any tools or resources, which appeals to me greatly.

`}{/* I love the process of making things itself — as much as finishing them. Programming is my favourite method of making things, but design, photo manipulation, game development and many other areas compete for my interest along with learning itself, which I consider to be just another form of making.*/}
{`
In the future, I hope to use programming to make the world a better place.







Being homeschooled, I have had the opportunity to dedicate a large portion of my
time to learning programming and computer science in general.
I started with HTML and basic web design 5 years ago at Coderdojo.
I then entered Cycle 1 of the 2012/2013 MPT course where I learned C.
From my first real self-made program — a giant if-tree text explorer written in C —
I taught myself Python, Java and Kotlin through numerous other personal projects for fun.

I have dedicated a great deal of my time to my game engine entitled "Balloon".
This can be found along with several other of my projects in the project tab.`}
    {
    // I've been working on a long term project which I believe best portrays my level of skill in
    // programming.
    // It is a game engine entitled "Balloon", this project and numerous other projects
    // can be found on my online portfolio at caelumforder.com.
    }
    </p>

        </pre>
      </div>
    )
  }
}

export default AboutPage
