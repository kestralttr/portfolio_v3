import React from 'react'
import MainTop from 'Components/MainTop/MainTop.js'
import MainMiddle from 'Components/MainMiddle/MainMiddle.js'
import MessageInput from 'Components/MessageInput/MessageInput.js'
import './Main.css'
// import Textarea from 'react-textarea-autosize';

export default class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bottomHeight: null
        }
    }

    render() {
        return(
            <div className="Main">
                <MainTop 
                currentChannel={this.props.currentChannel}
                openSettingsModal={this.props.openSettingsModal}
                />
                <MainMiddle currentChannel={this.props.currentChannel} activeAvatar={this.props.activeAvatar} />
                <div className="Main-bottom">
                    <div className="message-input-button">+</div>
                    <MessageInput currentChannel={this.props.currentChannel} saveMessageDataObject={this.props.saveMessageDataObject} />
                </div>
            </div>
        )
    }

}