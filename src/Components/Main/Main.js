import React from 'react'
import MainMiddle from 'Components/MainMiddle/MainMiddle.js'
import './Main.css'

export default class Main extends React.Component {

    render() {
        return(
            <div className="Main">
                <div className="Main-top"></div>
                <MainMiddle currentSection={this.props.currentSection} />
                <div className="Main-bottom">
                    <input />
                </div>
            </div>
        )
    }

}