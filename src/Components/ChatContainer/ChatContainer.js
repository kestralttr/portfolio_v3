import React from 'react'
import Radium from 'radium'

const ChatContainer = props => {
    let activeClass = "";
    let activeBGColor = null;
    let activeTextColor = null;
    let hoverColor = null;
    const children = React.Children.map(props.children, child => {
        activeClass = "";
        if(props.currentSection && props.currentSection === child) {
            activeClass = "active-section";
            activeBGColor = props.activeItemBG;
            activeTextColor = props.activeItemText;
            hoverColor = props.activeItemBG;
        } else {
            activeClass = "";
            activeBGColor = null;
            activeTextColor = null;
            hoverColor = props.hoverBG;
        }
        return(
            <li className={activeClass}
            style={{
                ":hover":{backgroundColor: hoverColor},
                backgroundColor: activeBGColor,
                color: activeTextColor

            }}
            onClick={props.updateCurrentSection(`${child}`)}
            >
                {props.icon} {child}</li>
        )
    });
    return(
        <div className="Sidebar-chat-container">
        <div className="Sidebar-chat-container-header">{props.header}</div>
        <ul>
            {children}
        </ul>
    </div>
    );
}

export default Radium(ChatContainer);