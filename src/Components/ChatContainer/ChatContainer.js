import React from 'react'
import Radium from 'radium'
import returnAvatarName from 'Global_Functions/returnAvatarName.js'

const ChatContainer = props => {
    let activeClass = "";
    let activeBGColor = null;
    let activeTextColor = null;
    let hoverColor = null;
    const children = React.Children.map(props.children, child => {
        activeClass = "";
        if(props.currentChannel && props.currentChannel === child) {
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
        let channelName = child;
        if(channelName === "user") {
            channelName = returnAvatarName(props.activeAvatar);
        }
        return(
            <li className={activeClass}
            style={{
                ":hover":{backgroundColor: hoverColor},
                backgroundColor: activeBGColor,
                color: activeTextColor

            }}
            onClick={props.updateCurrentChannel(`${child}`)}
            >
                {props.icon} {channelName}</li>
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