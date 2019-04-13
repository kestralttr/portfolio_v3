import React from 'react'
import MainTop from 'Components/MainTop/MainTop.js'
import MainMiddle from 'Components/MainMiddle/MainMiddle.js'
import './Main.css'

export default class Main extends React.Component {

    render() {
        return(
            <div className="Main">
                    <MainTop currentSection={this.props.currentSection}/>
                <MainMiddle currentSection={this.props.currentSection} />
                <div className="Main-bottom">
                    <input className="message-input"/>
                </div>
            </div>
        )
    }

}