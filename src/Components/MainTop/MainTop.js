import React from 'react'
import './MainTop.css'

const MainTop = (props) => {
    return(
        <div class="Main-top">
            <div class="main-top-left-container">
                <div className="main-top-title">{props.currentSection}</div>
                <div className="main-top-description">Information about Alex</div>
            </div>
            <div className="main-top-right-container">
                <input placeholder="Search" className="main-top-search-input" />
            </div>
        </div>
    )
}

export default MainTop;