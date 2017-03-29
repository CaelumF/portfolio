import React, {Component} from 'react'

import cd1Img from '../../../images/coderdojo (1).png'
import cd2Img from '../../../images/coderdojo/coderdojo (2).jpg'
import cd3Img from '../../../images/coderdojo/coderdojo (3).jpg'

export default class CoderdojoPage extends Component{

  render(){
    var IBMCSLink = <a href={"http://ibmcorkcoderdojo.com/course?v=cs"}></a>
    var IBMLink = <a href={"http://ibmcorkcoderdojo.com/"}>IBM Cork's Coderdojo</a>

    return(
      <div>
        <pre>

          {/*
            Coderdojo is non-profit, volunteer-led movement to create environments for young people
            to learn programming, meet peers of which they can make projects with and share their experience.*/}
{`
I developed a passion for programming at`}<a href={"http://coderdojo.com"}>Coderdojo.</a>

{`
I joined the first ever Coderdojo (Dojo 0) in its infancy. Over the past
5 years or so I have mentored in 5 different dojo clubs and have led over a 100 lessons.


The first dojo opened in 2011 at the National Software Centre,
There I learned HTML, JavaScript and began leading my own classes
to share that what I had learnt with others as the number of attendees steadily increased.

I have also been mentoring at the `} <a href={"http://ibmcorkcoderdojo.com/"}>IBM Cork coderdojo </a>

{` for the last two years.`}
<img src={"http://i.imgur.com/XBQAcm5.jpg"} height="250vh"></img>


{`
There I have led classes covering HTML, CSS, JavaScript, Android Development,
Java and general Computer Science.

The class has a page on IBM Cork Coderdojo's website`}<a href={"http://ibmcorkcoderdojo.com/course?v=cs"}>here</a>

        </pre>

      </div>
    )
  }
}
