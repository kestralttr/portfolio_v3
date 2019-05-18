import React from 'react';
import './Sidebar.css';
import ChatContainer from 'Components/ChatContainer/ChatContainer'
import avatarColorPalettes from 'Static_Data/avatarColorPalettes.js'

const returnColor = (avatar, key) => {
    return avatarColorPalettes[avatar][key];
}

const Sidebar = props => {
    let mobileSidebarVisibleClass = props.visible ? "mobile-sidebar-visible" : "";
    let mobileBackgroundVisibleClass = props.visible ? "mobile-background-visible" : "";
    let sidebarClass = `Sidebar ${mobileSidebarVisibleClass}`;
    return(
        <React.Fragment>
            <div className={mobileBackgroundVisibleClass} onClick={props.hideMobileSidebar}></div>
            <div className={sidebarClass} style={{
                backgroundColor:returnColor(props.activeAvatar,"colBG"),
                color:returnColor(props.activeAvatar,"itemText")
                }}>
                <div className="Sidebar-header">
                    <div>Alex Bennett's Portfolio</div>
                </div>
                <ChatContainer
                icon="#"
                hoverBG={returnColor(props.activeAvatar,"hoverBG")}
                activeItemBG={returnColor(props.activeAvatar,"activeItemBG")}
                activeItemText={returnColor(props.activeAvatar,"activeItemText")}
                header="Channels"
                updateCurrentChannel={props.updateCurrentChannel}
                currentChannel={props.currentChannel}
                activeAvatar={props.activeAvatar}
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
                updateCurrentChannel={props.updateCurrentChannel}
                currentChannel={props.currentChannel}
                activeAvatar={props.activeAvatar}
                >
                    {"alex"}
                    {"user"}
                </ChatContainer>
            </div>
        </React.Fragment>
    )
}

export default Sidebar;