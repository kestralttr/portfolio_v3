import React from 'react'
import './About.css'
import Message from 'Components/Message/Message.js'
import Thumb_Bennett from 'Images/thumb_bennett.jpg'

const About = props => {
    return(
        <div className="content-container">
            <Message 
            profilePic={Thumb_Bennett} 
            authorName="alex"
            time="11:32 AM">
                <div>Hey there!</div>
                <div>Thanks for visiting my website</div>
            </Message>
            <Message 
            profilePic={Thumb_Bennett} 
            authorName="alex"
            time="11:33 AM">
                <div>I thought it'd be fun to lay out some of the details about myself in a Slack format because we're all so used to it.</div>
            </Message>
        </div>
    );
}

export default About;