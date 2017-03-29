import React, {Component} from 'react'
import YouTube from 'react-youtube'
import BalloonPageCSS from '../../../css/BalloonPage.css'
import FloatingImage from '../../FloatingImage'
import GithubCorner from 'react-github-corner';
const BalloonPage = () => (
  <div>
    <GithubCorner href="https://github.com/CaelumF/Balloon" />
      <pre>{`


Around 4 years ago I wanted to make a physics-based sandbox MMO game.
Players would design bases, factories and vehicles to compete for territory in a
world comparable in size to Earth.

I discovered that games with those characteristics are not achievable with current technology.
There seems to be several reasons for this:`}

      </pre>
            {<YouTube
             videoId="EFPHBpZF95c"
             opts={{
               height: 'auto',
               width: 'auto',
                 playerVars: {
                   autoplay: 1
                 }}
               }
             />}
      <ol>
        {/*TODO: remove gap*/}
        <li>
          <pre>
{`There are no existing frameworks that make development of such complicated MMOs
viable.`}
          </pre>
        </li>
        <li>
          <pre>
{`Publicly available MMO engines are proprietary and quite limiting, restricting innovation required to compete in the MMO genre.
Typical MMOs like World of Warcraft consists of 5,500,000+ lines of code, 1000000+ art assets and twenty seven hours of music.`}
          </pre>
        </li>
        <li>
          <pre>
{`General purpose engines scale poorly and don't accomodate for a high numbers of players without modifcation.`}
          </pre>
        </li>
      </ol>

    <pre>
{`This is a shame as multiplayer would be a great tool for indie developers to make simple games very fun (look at slither.io).

So I decided to design a physics engine that developers could use to create MMO games.`}
      <hr></hr>
      <h2>

{`Graphics
`}
      </h2>

    </pre>

      <pre className="spookText">
{`
The Balooon Engine has a lightly coupled abstract graphical interface. Developers can either
use the high level interface for basic operations, or a specific one for precision.
`}
        <hr></hr>
        <h2>Ardor3D</h2>
{`
Ardor3D is the Balloon Engine's default graphical implementation.
Here are some screenshots of it's examples to show what it can do:



`}
<img className="smolIMG" src={"http://i.imgur.com/ZZtHUdk.jpg"}></img>
<img className="smolIMG" src={"http://i.imgur.com/XETZRB3.jpg"} ></img>
<img className="smolIMG" src={"http://i.imgur.com/sSzA5pR.png"}></img>
<img className="smolIMG" src={"http://i.imgur.com/iYvywpi.png"}></img>
        <hr></hr>
        <h2>{`Write once and don't worry about Client-side prediction
            `}</h2>
          <FloatingImage src="http://i.imgur.com/rDbtWft.png"></FloatingImage>
{`
Everything in the Balloon engine runs in parallel on both the client and server.
Clients experience zero latency interacting with objects in the world with global
client-side prediction.

`}
      </pre>





  </div>
);

export default BalloonPage
