import React from 'react'
import './MainTop.css'

const returnDescription = (currentSection) => {
    switch (currentSection) {
        case "about":
            return "who i am";
        case "experience":
            return "what i've done";
        case "work":
            return "what i've built";
        case "contact":
            return "where i am";
        default:
            return "";
    }
}

const MainTop = (props) => {
    return(
        <div className="Main-top">
            <div className="main-top-left-container">
                <div className="main-top-title">{props.currentSection}</div>
                <div className="main-top-description">{returnDescription(props.currentSection)}</div>
            </div>
            <div className="main-top-right-container">
                <input placeholder="Search" className="main-top-search-input" />
            </div>
        </div>
    )
}

export default MainTop;