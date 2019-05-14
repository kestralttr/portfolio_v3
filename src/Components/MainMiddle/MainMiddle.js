import React from 'react'
import About from 'Components/middleSections/About/About.js'
import Experience from 'Components/middleSections/Experience/Experience.js'
import Work from 'Components/middleSections/Work/Work.js'
import Contact from 'Components/middleSections/Contact/Contact.js'
import User from 'Components/middleSections/User/User.js'
import Alex from 'Components/middleSections/Alex/Alex.js'
import DirectMessage from 'Components/middleSections/DirectMessage/DirectMessage.js'
import Message from 'Components/Message/Message.js'
import automatedResponses from 'Static_Data/automatedResponses.js'
import './MainMiddle.css'

export default class MainMiddle extends React.Component {
    constructor(props) {
        super(props);

        this.renderSection = this.renderSection.bind(this);
        this.renderAllMessages = this.renderAllMessages.bind(this);
        this.returnAutomaticReply = this.returnAutomaticReply.bind(this);
    }

    renderAllMessages(key) {
        return() => {
            let renderedMessageArray = [];
        
            this.props.messageData[key].forEach((messageDataObject, i) => {
                renderedMessageArray.push(
                    <Message 
                    key={i}
                    profilePic={require(`Images/avatar_thumbnails/${this.props.activeAvatar}.jpg`)} 
                    authorName={this.props.activeAvatar.split("_").join(" ")}
                    time={messageDataObject.time}>
                        <div>{messageDataObject.text}</div>
                        <div></div>
                    </Message>
                )
                if(this.props.currentChannel === "alex") {
                    renderedMessageArray.push(this.returnAutomaticReply(i));
                }

                
            });
            return renderedMessageArray;
        }
    }

    returnAutomaticReply(i) {
        if(!automatedResponses[i]) {return null;}
        let responseText = null;
        let randomNumber = Math.floor(Math.random()*Math.floor(automatedResponses[i].length));
        responseText = automatedResponses[i][randomNumber]; 
        if(responseText) {
            return(
                <Message 
                key={i+1*1000}
                profilePic={require(`Images/thumb_bennett.jpg`)} 
                authorName={"alex"}
                time="10:00 AM">
                    <div>{responseText}</div>
                    <div></div>
                </Message>
            )
        } else {
            return null;
        }
    }

    renderSection() {
        switch (this.props.currentChannel) {
            case "about":
                return <About />;
            case "experience":
                return <Experience />;
            case "work":
                return <Work />;
            case "contact":
                return <Contact />;
            case "alex":
                return <DirectMessage renderAllMessages={this.renderAllMessages('alex')} />;
            default:
                return <DirectMessage renderAllMessages={this.renderAllMessages('user')}/>;
        }
    }

    render() {
        return(
            <div className="main-middle">
                {this.renderSection()}
            </div>
        )
    }

}