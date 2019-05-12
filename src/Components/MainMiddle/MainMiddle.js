import React from 'react'
import About from 'Components/middleSections/About/About.js'
import Experience from 'Components/middleSections/Experience/Experience.js'
import Work from 'Components/middleSections/Work/Work.js'
import Contact from 'Components/middleSections/Contact/Contact.js'
import User from 'Components/middleSections/User/User.js'
import Alex from 'Components/middleSections/Alex/Alex.js'
import Message from 'Components/Message/Message.js'
import './MainMiddle.css'

export default class MainMiddle extends React.Component {
    constructor(props) {
        super(props);

        this.renderSection = this.renderSection.bind(this);
        this.renderAllMessages = this.renderAllMessages.bind(this);
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
                // this is where to insert the messages from Alex for the "alex" component
            });
            return renderedMessageArray;
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
                return <Alex renderAllMessages={this.renderAllMessages('alex')} />;
            default:
                return <User renderAllMessages={this.renderAllMessages('user')}/>;
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