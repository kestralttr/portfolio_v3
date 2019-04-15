import React from 'react'
import './Message.css'

const Message = props => {
    return(
        <div className="message-container">
            <div className="message">
                <img className="profile-pic" src={props.profilePic}/>
                <div className="author-name">
                    {props.authorName}
                </div>
                <div className="text-container">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Message;