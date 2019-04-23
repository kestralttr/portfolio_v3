import React from 'react'
import './About.css'
import Message from 'Components/Message/Message.js'
import Thumb_Bennett from 'Images/thumb_bennett.jpg'
import ignshows from 'Images/ignshows.jpg'
import petcbd from 'Images/petcbd.jpg'
import pvpauthor from 'Images/pvpauthor.jpg'

const About = props => {
    return(
        <div className="content-container">
            <Message 
            profilePic={Thumb_Bennett} 
            authorName="alex"
            time="11:32 AM"
            link={{
                text:"IGN Shows Page",
                url:"https://www.ign.com/watch",
                description: "IGN needed a new hub for all their shows that was mobile-friendly and easy to understand.",
                imageSrc:ignshows
                }}>
                <div>I worked with IGN's designers to build this webpage for their shows.</div>
            </Message>
            <Message 
            profilePic={Thumb_Bennett} 
            authorName="alex"
            time="11:32 AM"
            link={{
                text:"IGN Author Pages",
                url:"https://www.ign.com/watch/naomi",
                imageSrc:pvpauthor
                }}>
                <div>The IGN author pages needed a rework.</div>
            </Message>

            <Message 
            profilePic={Thumb_Bennett} 
            authorName="alex"
            time="11:35 AM"
            link={{
                text:"Trapeze Labs Customer Sites",
                url:"https://www.ign.com/watch/naomi",
                imageSrc:petcbd
                }}>
                <div>All customers are directed to this conversion-optimized React application which I build from scratch.</div>
            </Message>

        </div>
    );
}

export default About;