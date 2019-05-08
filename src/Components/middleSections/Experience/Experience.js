import React from 'react'
import './Experience.css'
import Message from 'Components/Message/Message.js'
import Thumb_Bennett from 'Images/thumb_bennett.jpg'
import TrapezeLabs from 'Images/trapezeanimation2.gif'
import IGN from 'Images/ignlogo.jpg'
import LeoBurnett from 'Images/leoburnett.jpg'

const Experience = props => {
    return(
        <div className="content-container">
            <Message 
                profilePic={Thumb_Bennett} 
                authorName="alex"
                time="3:12 PM"
                link={{
                    text:"Trapeze Labs - Front-End JavaScript Developer",
                    url:"https://trapezelabs.io",
                    description: "A successful startup that creates offer management software for direct-response advertising.",
                    imageSrc:TrapezeLabs
                    }}>
                    <div>• Rebuilt our customer-facing codebase in ReactJS/Redux.  By creating a single application that handles all verticals, development time required to add additional products was halved, while load times were reduced by 20% and conversion rates increased by 2%.</div>
                    <div>• Designed and built the Compliant CMS front-end:  a service which allows fast, easy generation of bank-compliant, fully customizable, e-commerce websites for merchant account approval.</div>
            </Message>
            <Message 
                profilePic={Thumb_Bennett} 
                authorName="alex"
                time="3:14 PM"
                link={{
                    text:"IGN - Front-End Developer Intern",
                    url:"https://www.ign.com/",
                    description: "A world-renowned entertainment media company, specializing in video game journalism.",
                    imageSrc:IGN
                    }}>
                    <div>• Created the mobile-first IGN Show Index page and redesigned Author Pages to better showcase all relevant content.</div>
                    <div>• Improved the advertising experience for international visitors using IGN’s ReactJS video player.</div>
            </Message>
            <Message 
                profilePic={Thumb_Bennett} 
                authorName="alex"
                time="3:17 PM"
                link={{
                    text:"Leo Burnett Company - Asst. Advertising Executive for Nintendo",
                    url:"https://leoburnett.com/",
                    description: "A globally active advertising agency with over 80 years of experience delivering creative and effective advertising campaigns.",
                    imageSrc:LeoBurnett
                    }}>
                    <div>• Led the management of 15+ advertising campaigns, all of which were finished on schedule.</div>
                    <div>• Launched campaigns for Splatoon, Super Smash Bros. for Wii U, and amiibo -- all of which outperformed expectations. </div>
            </Message>
        </div>
    );
}

export default Experience;