import React from 'react'
import './Main.css'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="Main">
                <div className="Main-top"></div>
                <div className="Main-middle"></div>
                <div className="Main-bottom">
                    <input />
                </div>
            </div>
        )
    }

}