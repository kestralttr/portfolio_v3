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
            time="11:35 AM"
            link={{
                text:"Trap3ze Web Application (Front-End)",
                url:"https://www.ign.com/watch/naomi",
                description: "Customer-facing e-commerce application capable of rendering all sales verticals while reusing core components.",
                imageSrc:petcbd
                }}>
                <div>• Restructures & restyles the rendered output for multiple verticals across all devices, based on a requested config JSON object.</div>
                <br></br>
                <div>• Tracks and stores user behavior in both a Redux store and in the browser's local storage to determine when to fire pixels, display downsells, and update purchase information prior to executing transactions.</div>
                <br></br>
                <div>• Optimizes the bundle size with a number of Webpack features, including tree-shaking, code-splitting, and lazy loading.</div>
                <br></br>
            </Message>
            <Message 
            profilePic={Thumb_Bennett} 
            authorName="alex"
            time="11:37 AM"
            link={{
                text:"Compliant CMS Front-End",
                url:"https://www.ign.com/watch/naomi",
                description: "A service which allows quick and easy generation of compliant, fully-customizable, e-commerce sites for merchant account approval.",
                imageSrc:""
                }}>
                <div>• Uses component styles to apply dynamic styling and positioning data provided by the CMS.</div>
                <br></br>
                <div>• Displays a fully-functional order page in either single, multi, or cart configurations for product selection.</div>
                <br></br>
            </Message>
            <Message 
            profilePic={Thumb_Bennett} 
            authorName="alex"
            time="11:39 AM"
            link={{
                text:"IGN Shows Page",
                url:"https://www.ign.com/watch",
                description: "The mobile-first, fully-responsive hub for all of IGN's shows.",
                imageSrc:ignshows
                }}>
                <div>• Uses multiple API endpoints efficiently to maintain best possible time complexity while delivering all needed data.</div>
                <br></br>
                <div>• Employs custom CSS to match the IGN Design Team's responsive wireframes exactly across all devices.</div>
                <br></br>
            </Message>
            <Message 
            profilePic={Thumb_Bennett} 
            authorName="alex"
            time="11:45 AM"
            link={{
                text:"IGN Author Pages",
                url:"https://www.ign.com/watch/naomi",
                description: "A central location to view all relevant content for each IGN personality.",
                imageSrc:pvpauthor
                }}>
                <div>• Determines content size and type for each page, restructuring the page styling accordingly to avoid dead space.</div>
                <br></br>
                <div>• Includes the ReactJS-powered video player that runs country-specific advertisements.</div>
                <br></br>
            </Message>
        </div>
    );
}

export default Work;