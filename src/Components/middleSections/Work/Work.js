import React from 'react'
import './Work.css'
import Message from 'Components/Message/Message.js'
import Thumb_Bennett from 'Images/thumb_bennett.jpg'
import ignshows from 'Images/ignshows.jpg'
import petcbd from 'Images/petcbd.jpg'
import pvpauthor from 'Images/pvpauthor.jpg'

const Work = props => {
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
                description: "IGN author pages now pull all related videos and content from each author.",
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
                description: "All customers are routed to one application, which rebuilds itself according to the current need",
                imageSrc:petcbd
                }}>
                <div>All customers are directed to this conversion-optimized React application which I build from scratch.</div>
            </Message>
        </div>
    );
}

export default Work;