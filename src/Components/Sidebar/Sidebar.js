import React from 'react';
import './Sidebar.css';
import ChatContainer from 'Components/ChatContainer/ChatContainer'

const Sidebar = props => {
    return(
        <div className="Sidebar">
        <div className="Sidebar-header">
            <div>Alex Bennett</div>
            <div>user</div>
        </div>
        <ChatContainer icon="#" header="Channels" updateCurrentSection={props.updateCurrentSection} currentSection={props.currentSection}>
            {"about"}
            {"experience"}
            {"projects"}
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