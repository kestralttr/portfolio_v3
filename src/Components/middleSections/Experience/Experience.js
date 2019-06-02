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
                time="Spring 2018 - Present"
                link={{
                    text:"Trapeze Labs - Front-End JavaScript Developer",
                    url:"https://trapezelabs.io",
                    description: "A successful startup that creates offer management software for direct-response advertising.",
                    imageSrc:TrapezeLabs
                    }}>
                    <div>• Migrated the company’s e-commerce front-end from a proprietary language to a ReactJS/Redux single-page application with custom Webpack configuration, enabling page load times of under a second that resulted in a conversion rate increase of over 2%.</div>
                    <br></br>
                    <div>• Developed a shared component library for all sales verticals using code-splitting and lazy loading that decreased the time required for application updates by over 80%.</div>
                    <br></br>
                    <div>• Restructured form behavior and data handling for a faster, more intuitive ordering process for return customers, resulting in an 8% remarketing conversion rate increase.</div>
                    <br></br>
                    <div>• Automated the work of 4 team members by building a custom e-commerce website generator for merchant account approval.</div>
                    <br></br>
                    <div>• Coordinated with backend engineers to allow transactions across multiple CRMs, via JSON restructuring, resulting in a 15% expansion of the company’s client base.</div>
                    <br></br>
                    <div>• Architected a text replacement tool that automatically converts company e-commerce websites to any foreign language.</div>
                    <br></br>
                    <div>• Trained designers to create and style new sales verticals with JSX and Sass, increasing the speed of adding new sales verticals by 50%.</div>
                    <br></br>
                    <div>• Regularly increased client satisfaction by creating new features specifically designed to address business needs and industry pain points.</div>
                    <br></br>
                    <div>• Adhered to Agile development values with an emphasis on the Kanban methodology, working collaboratively with team members on issues and features via the Git workflow.</div>
            </Message>
            <Message 
                profilePic={Thumb_Bennett} 
                authorName="alex"
                time="Fall 2017 - Spring 2018"
                link={{
                    text:"Trapeze Labs - Marketing Web Developer",
                    url:"https://trapezelabs.io",
                    description: "A successful startup that creates offer management software for direct-response advertising.",
                    imageSrc:TrapezeLabs
                    }}>
                    <div>• Optimized landing page effectiveness by continually analyzing results of A/B testing, Google Adwords, & other native advertising campaigns, resulting in an overall Cost Per Acquisition decrease of 68%.</div>
                    <br></br>
            </Message>
            <Message 
                profilePic={Thumb_Bennett} 
                authorName="alex"
                time="Summer 2017"
                link={{
                    text:"IGN - Front-End Development Intern",
                    url:"https://www.ign.com/",
                    description: "A world-renowned entertainment media company, specializing in video game journalism.",
                    imageSrc:IGN
                    }}>
                    <div>• Created the IGN Shows Page, a mobile-first hub for all studio media, allowing over 100 million monthly users to easily browse and locate engaging video content.</div>
                    <br></br>
                    <div>• Debugged geolocation issues within IGN’s proprietary ReactJS video player, improving the advertising experience for international visitors.</div>
                    <br></br>
                    <div>• Rebuilt the profile pages for IGN personalities, creating an intuitive, well-organized interface for all related shows, articles, and video content.</div>
            </Message>
            <Message 
                profilePic={Thumb_Bennett} 
                authorName="alex"
                time="Summer 2014 - Summer 2016"
                link={{
                    text:"Leo Burnett Advertising Agency - Advertising Executive for Nintendo of America",
                    url:"https://leoburnett.com/",
                    description: "A globally active advertising agency with over 80 years of experience delivering creative and effective advertising campaigns.",
                    imageSrc:LeoBurnett
                    }}>
                    <div>• Personally led the development of 15+ advertising campaigns, totaling more than $1 million in production budgets, while ensuring that 100% of projects were delivered on time.</div>
                    <br></br>
                    <div>• Coordinated all tasks for five internal teams and evaluated the quality of work from each, resulting in over 50% of campaigns exceeding their sales goals.</div>
                    <br></br>
                    <div>• Managed all communication with the Nintendo of America marketing department and received the highest client satisfaction rating in the agency.</div>
                    <br></br>
                    <div>• Created an in-house video editing protocol that doubled the number of commercial review sessions at no additional cost to the client.</div>
                    <br></br>
            </Message>
        </div>
    );
}

export default Experience;