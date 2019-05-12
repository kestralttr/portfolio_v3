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
            text:"",
            inputFieldFocused:false
            
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.returnPlaceholder = this.returnPlaceholder.bind(this);
        this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
        this.handleInputFieldFocus = this.handleInputFieldFocus.bind(this);
        this.handleInputFieldBlur = this.handleInputFieldBlur.bind(this);
        this.formatTimeInteger = this.formatTimeInteger.bind(this);
        this.returnTimeString = this.returnTimeString.bind(this);
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

        this.setState({text:e.target.value});
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
            console.log(e.key)
            let d = new Date();
            let dateText = d.toTimeString();
            console.log(dateText)

            let messageDataObject = {
                profilePic: null,
                authorName: null,
                time: null,
                text: ""
            }
        }
    }

    submitMessage() {

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
            value={this.state.text}
            onChange={this.handleInputChange}
            onKeyPress={this.handleEnterKeyPress}
            onFocus={this.handleInputFieldFocus}
            onBlur={this.handleInputFieldBlur}
            />
        );
        }
}