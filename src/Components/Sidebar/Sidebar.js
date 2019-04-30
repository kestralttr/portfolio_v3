import React from 'react';
import './Sidebar.css';
import ChatContainer from 'Components/ChatContainer/ChatContainer'
import avatarColorPalettes from 'Static_Data/avatarColorPalettes.js'
import returnAvatarName from 'Global_Functions/returnAvatarName.js'

const returnColor = (avatar, key) => {
    return avatarColorPalettes[avatar][key];
}

const Sidebar = props => {
    return(
        <div className="Sidebar" style={{
            backgroundColor:returnColor(props.activeAvatar,"colBG"),
            color:returnColor(props.activeAvatar,"itemText")
            }}>
        <div className="Sidebar-header">
            <div>Alex Bennett's Portfolio</div>
            <div>{returnAvatarName(props.activeAvatar)}</div>
        </div>
        <ChatContainer
        icon="#"
        hoverBG={returnColor(props.activeAvatar,"hoverBG")}
        activeItemBG={returnColor(props.activeAvatar,"activeItemBG")}
        activeItemText={returnColor(props.activeAvatar,"activeItemText")}
        header="Channels"
        updateCurrentSection={props.updateCurrentSection}
        currentSection={props.currentSection}
        >
            {"about"}
            {"experience"}
            {"work"}
            {"contact"}
        </ChatContainer>
        <ChatContainer
        icon="•"
        hoverBG={returnColor(props.activeAvatar,"hoverBG")}
        activeItemBG={returnColor(props.activeAvatar,"activeItemBG")}
        activeItemText={returnColor(props.activeAvatar,"activeItemText")}
        header="Direct Messages"
        updateCurrentSection={props.updateCurrentSection}
        currentSection={props.currentSection}
        >
            {"alex"}
            {returnAvatarName(props.activeAvatar)}
        </ChatContainer>
    </div>
    )
}

export default Sidebar;