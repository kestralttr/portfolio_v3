import React from 'react'
import './About.css'
import Message from 'Components/Message/Message.js'
import Thumb_Bennett from 'Images/thumb_bennett.jpg'

let TH = "thumb_bennett.jpg"

const About = props => {
    return(
        <div className="content-container">
            <Message 
            profilePic={require(`Images/${TH}`)} 
            authorName="alex"
            time="11:32 AM">
                <div>Hey there!</div>
                <div>Welcome to my Slack-themed personal site.</div>
                <div>If you're familiar with Slack, you should know how to navigate around.  If not, it's easy enough:  just click the channel name in the sidebar that interests you and you'll see the contents shown in this section.</div>
                <div></div>
            </Message>
            <Message 
            profilePic={Thumb_Bennett} 
            authorName="alex"
            time="11:33 AM">
                <div>I'm currently working as a Front-End JavaScript Developer for an e-commerce startup called Trapeze Labs.</div>
                <div>I work mainly in JavaScript and specialize in creating single page application with ReactJS/Redux, but I love taking advantage of the opportunity to build something new and different whenever possible.</div>
            </Message>
            <Message 
            profilePic={Thumb_Bennett} 
            authorName="alex"
            time="11:35 AM">
                <div>In addition to web development, I also have professional experience in marketing and video editing.</div>
                <div>And lastly, I'm a co-founder of an online e-commerce business called The Stinky Candle Company.  And yes, it's exactly what it sounds like.  Feel free to check us out <a target="_blank" rel="noopener noreferrer" href="https://stinkycandlecompany.com/">here</a> and hit me up if you'd be interested in a discount. ;)</div>
            </Message>
            <Message 
            profilePic={Thumb_Bennett} 
            authorName="alex"
            time="11:33 AM">
                <div>Alright, well that's about it.  I hope you enjoy your time on my website and please feel free to contact me if you want to chat.</div>
            </Message>
        </div>
    );
}

export default About;