import React, {Component} from 'react'

const PortfolioPage = () => (
  <div>
    <pre>
{`
I started this site out with standard HTML and CSS, but sorely missed React from when I used it at IBM during work experience.
I also wanted something unique and unconventional, so I used React with Node JS and Redux.

React's component based nature makes adding new pages and content easy.
It also allows me to easily swap out components with others during runtime and simply animate that process with CSS.

NPM packages used include:
`}
  <ul>
    <li>react</li>
    <li>react-redux</li>
    <li>react-youtube</li>
  </ul>
{`It can be found on Github `} <a>here</a>
{`
I plan on populating the sidebar with more of my projects after I have refactored
them.`}
    </pre>
  </div>
);

export default PortfolioPage
