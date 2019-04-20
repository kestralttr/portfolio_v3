import React from 'react'
import MainTop from 'Components/MainTop/MainTop.js'
import MainMiddle from 'Components/MainMiddle/MainMiddle.js'
import './Main.css'
import Textarea from 'react-textarea-autosize';

export default class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bottomHeight: null
        }
    }

    componentDidMount() {
        // let messageInput = document.getElementsByClassName('message-input')[0];
        // messageInput.addEventListener('resize', (e) => {
        //     console.log(e)
        // })
    }

    render() {
        return(
            <div className="Main">
                <MainTop currentSection={this.props.currentSection}/>
                <MainMiddle currentSection={this.props.currentSection} />
                <div className="Main-bottom">
                    <div className="message-input-button">+</div>
                    <input className="message-input" placeholder="Jot something down"/>
                </div>
            </div>
        )
    }

}