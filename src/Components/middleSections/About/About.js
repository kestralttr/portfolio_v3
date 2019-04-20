import React from 'react'
import './About.css'
import Message from 'Components/Message/Message.js'
import Thumb_Bennett from 'Images/thumb_bennett.jpg'

const About = props => {
    return(
        <div className="content-container">
            <Message profilePic={Thumb_Bennett} authorName="Alex 11:30am">
                <div>Let's test out this here message.  I wonder what happens if we keep on typing for so long that it eventually runs off the side of the page and it has to wrap around.</div>
            </Message>
            <Message profilePic={Thumb_Bennett} authorName="Alex 11:30am" link={{text:"Google",url:"http://www.google.com"}}>
                <div>But seriously, it wasn't all bad.</div>
                <div>I got some sick swag, got to talk with Reggie Fils-Amie, and play MarioKart pretty much every day.</div>
                <div>Oh right, and who can forget freaking E3???</div>
            </Message>
            <Message 
            profilePic={Thumb_Bennett} 
            authorName="Alex 11:32am"
            link={{text:"Google",url:"http://www.google.com"}}>
                <div>This is a link to google!</div>
            </Message>
        </div>
    );
}

export default About;