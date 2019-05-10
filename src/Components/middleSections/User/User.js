import React from 'react'
import Message from 'Components/Message/Message.js'
import Thumb_Bennett from 'Images/thumb_bennett.jpg'

let TH = "thumb_bennett.jpg"

// [
//     {profPic, author, time, text}
// ]

const renderAllMessages = (messageDataArray) => {
    let renderedMessageArray = [];

    messageDataArray.forEach((messageDataObject) => {
        renderedMessageArray.push(
            <Message 
            profilePic={require(`Images/${messageDataObject.profilePic}`)} 
            authorName={messageDataObject.authorName}
            time={messageDataObject.time}>
                <div>{messageDataObject.text}</div>
                <div></div>
            </Message>
        )
    });
}

const User = props => {
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
        </div>
    );
}

export default User;