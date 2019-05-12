import React from 'react'
import './MessageInput.css'

export default class MessageInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textInputAllowed: false,
            sectionsThatDisallowTextInput: [
                "about","experience","work","contact"
            ],
            inputFieldText:"",
            inputFieldFocused:false
            
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.returnPlaceholder = this.returnPlaceholder.bind(this);
        this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
        this.handleInputFieldFocus = this.handleInputFieldFocus.bind(this);
        this.handleInputFieldBlur = this.handleInputFieldBlur.bind(this);
        this.formatTimeInteger = this.formatTimeInteger.bind(this);
        this.returnTimeString = this.returnTimeString.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.clearInputField = this.clearInputField.bind(this);
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevProps.currentChannel !== this.props.currentChannel) {
            if(this.state.sectionsThatDisallowTextInput.includes(this.props.currentChannel)) {
                this.setState({textInputAllowed: false});
            } else {
                this.setState({textInputAllowed: true});
            }
        }
    }

    formatTimeInteger(timeInteger) {
        if(timeInteger.toString().length < 2) {
            timeInteger = "0" + timeInteger.toString();
        }
        return timeInteger;
    }

    returnTimeString() {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let AMPM = "AM";
        if(hours > 12) {
            hours = hours-12;
            AMPM = "PM"
        }
        let timeString = `${this.formatTimeInteger(hours)}:${this.formatTimeInteger(minutes)} ${AMPM}`;
        return timeString;
    }

    handleInputChange(e) {
        console.log('working')
        e.preventDefault();
        if(!this.state.textInputAllowed) return null;

        this.setState({inputFieldText:e.target.value});
    }

    returnPlaceholder() {
        if(this.state.textInputAllowed) {
            return "Jot something down";
        } else {
            return "Sorry, no typing in this channel.  Try another!"
        }
    }

    handleEnterKeyPress(e) {
        if(this.state.textInputAllowed && this.state.inputFieldFocused && e.key === "Enter") {
            e.preventDefault();
            this.submitMessage();
        }
    }

    submitMessage() {
        if(this.state.inputFieldText.length === 0) {return null;}

        let messageObject = {
            time: this.returnTimeString(),
            text: this.state.inputFieldText
        };

        this.props.saveMessageDataObject(this.props.currentChannel,messageObject);
        this.clearInputField();
    }

    clearInputField() {
        this.setState({
            inputFieldText: ""
        });
    }

    handleInputFieldFocus(e) {
        this.setState({inputFieldFocused: true});
    }

    handleInputFieldBlur(e) {
        this.setState({inputFieldFocused: false});
    }

    render() {
        return(
            <input 
            className="message-input" 
            placeholder={this.returnPlaceholder()}
            value={this.state.inputFieldText}
            onChange={this.handleInputChange}
            onKeyPress={this.handleEnterKeyPress}
            onFocus={this.handleInputFieldFocus}
            onBlur={this.handleInputFieldBlur}
            />
        );
        }
}