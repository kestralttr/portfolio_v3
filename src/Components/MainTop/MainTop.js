import React from 'react'
import './MainTop.css'

const returnChannelName = (currentChannel, activeAvatar) => {
    if(!['about','experience','work','contact','alex'].includes(currentChannel)) {
        return activeAvatar.split("_").join(" ");
    } else {
        return currentChannel;
    }
}

const returnDescription = (currentChannel) => {
    switch (currentChannel) {
        case "about":
            return "About me";
        case "experience":
            return "Things I've done";
        case "work":
            return "Stuff I've built";
        case "contact":
            return "How to connect";
        case "alex":
            return "Chat with me"
        default:
            return "Chat with yourself";
    }
}

const MainTop = (props) => {
    let mobileHamburgerButtonTypeClass = props.mobileSidebarVisible ? "x-icon" : "lines-icon";
    let mobileHamburgerClass = `mobile-hamburger-button ${mobileHamburgerButtonTypeClass}`;
    return(
        <div className="Main-top">
            <div className="main-top-left-container">
                <div className="main-top-title">{returnChannelName(props.currentChannel,props.activeAvatar)}</div>
                <div className="main-top-description">{returnDescription(props.currentChannel)}</div>
            </div>
            <div className="main-top-right-container">
                {/* <div>
                    <a className="download-button" target="_blank" rel="noopener noreferrer" href="https://github.com/kestralttr/portfolio_v3">See the code for this site</a>
                </div> */}
                <div>
                    <a className="download-button" target="_blank" rel="noopener noreferrer" href="https://dl.dropbox.com/s/mw9lnrco1bv70l1/Alex_Bennett_Resume.pdf?dl=0">Download Resume</a>
                </div>
                <div>
                    <span className="download-button" onClick={props.openSettingsModal} alt="Settings Button">Change Avatar</span>
                </div>
            </div>
            <div className={mobileHamburgerClass} onClick={props.showMobileSidebar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default MainTop;