import React from 'react';
import './Sidebar.css';
import ChatContainer from 'Components/ChatContainer/ChatContainer'
import avatarColorPalettes from 'Static_Data/avatarColorPalettes.js'

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
            <div>Alex Bennett</div>
            <div>user</div>
        </div>
        <ChatContainer icon="#" header="Channels" updateCurrentSection={props.updateCurrentSection} currentSection={props.currentSection}>
            {"about"}
            {"experience"}
            {"work"}
            {"contact"}
        </ChatContainer>
        <ChatContainer icon="•" header="Direct Messages" updateCurrentSection={props.updateCurrentSection} currentSection={props.currentSection}>
            {"alex"}
            {"user"}
        </ChatContainer>
    </div>
    )
}

export default Sidebar;