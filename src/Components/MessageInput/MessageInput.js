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
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevProps.currentSection !== this.props.currentSection) {
            if(this.state.sectionsThatDisallowTextInput.includes(this.props.currentSection)) {
                this.setState({textInputAllowed: false});
            } else {
                this.setState({textInputAllowed: true});
            }
        }
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