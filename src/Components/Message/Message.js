import React from 'react'
import './Message.css'
import Link from 'Components/Link/Link.js'

const Message = props => {
    return(
        <div className="message">
            <img className="profile-pic" src={props.profilePic} alt="Profile"/>
            <div className="author-name">
                <strong>{props.authorName}</strong> <span>{props.time}</span>
            </div>
            <Link link={props.link} />
            <div className="text-container">
                {props.children}
            </div>
        </div>
    );
}

export default Message;