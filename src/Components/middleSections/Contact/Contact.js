import React from 'react'
import './Contact.css'
import Message from 'Components/Message/Message.js'
import Thumb_Bennett from 'Images/thumb_bennett.jpg'

let TH = "thumb_bennett.jpg"

const Contact = props => {
    return(
        <div className="content-container">
            <Message 
            profilePic={require(`Images/${TH}`)} 
            authorName="alex"
            time="06:15 AM">
                <div>If you would like to get in contact with me, feel free to either email me or text/call me using the information below:</div>
            </Message>
            <Message 
            profilePic={Thumb_Bennett} 
            authorName="alex"
            time="06:17 AM">
                <div>
                    Email:<br></br>
                    kestralttr@gmail.com
                </div>
                <br></br>
                <div>
                    Cell phone:<br></br>
                    630-805-3330
                </div>
                <br></br>
            </Message>
        </div>
    );
}

export default Contact;