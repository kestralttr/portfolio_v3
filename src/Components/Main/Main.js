import React from 'react'
import MainTop from 'Components/MainTop/MainTop.js'
import MainMiddle from 'Components/MainMiddle/MainMiddle.js'
import MessageInput from 'Components/MessageInput/MessageInput.js'
import './Main.css'

export default class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bottomHeight: null
        }
    }

    render() {
        console.log(this.props.currentChannel)
        return(
            <div className="Main">
                <MainTop 
                activeAvatar={this.props.activeAvatar}
                currentChannel={this.props.currentChannel}
                openSettingsModal={this.props.openSettingsModal}
                />
                <MainMiddle
                activeAvatar={this.props.activeAvatar}
                currentChannel={this.props.currentChannel}
                messageData={this.props.messageData}
                />
                <div className="Main-bottom">
                    <div className="message-input-button">+</div>
                    <MessageInput
                    activeAvatar={this.props.activeAvatar}
                    currentChannel={this.props.currentChannel}
                    saveMessageDataObject={this.props.saveMessageDataObject}
                    />
                </div>
            </div>
        )
    }

}