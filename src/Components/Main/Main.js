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
                currentSection={this.props.currentSection}
                openSettingsModal={this.props.openSettingsModal}
                />
                <MainMiddle currentSection={this.props.currentSection} />
                <div className="Main-bottom">
                    <div className="message-input-button">+</div>
                    <MessageInput currentSection={this.props.currentSection} saveMessageDataObject={this.props.saveMessageDataObject} />
                </div>
            </div>
        )
    }

}