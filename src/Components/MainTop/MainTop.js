import React from 'react'
import './MainTop.css'
import Gear_Icon from 'Images/gear_icon.png'

const returnDescription = (currentSection) => {
    switch (currentSection) {
        case "about":
            return "About me";
        case "experience":
            return "Things that I've done";
        case "work":
            return "Stuff that I've built";
        case "contact":
            return "How to reach me";
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
                <div>
                    <a className="download-button" target="_blank" rel="noopener noreferrer" href="https://github.com/kestralttr/portfolio_v3">See the code for this site</a>
                </div>
                <div>
                    <a className="download-button" target="_blank" rel="noopener noreferrer" href="https://dl.dropbox.com/s/gwpnbbzztstd3rk/SAMPLE_RESUME.pdf.pdf?dl=0">Download Resume</a>
                </div>
                <div>
                    <img className="settings-button" onClick={props.openSettingsModal} src={Gear_Icon} alt="Settings Button"/>
                </div>
            </div>
        </div>
    )
}

export default MainTop;