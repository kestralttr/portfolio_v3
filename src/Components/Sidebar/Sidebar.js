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
    let mobileButtonContainer = props.visible ? "mobile-button-container" : "hidden";
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

                <div className={mobileButtonContainer}>
                    <div>
                        <span 
                        className="download-button" 
                        onClick={props.openSettingsModal}
                        alt="Settings Button"
                        style={{
                            color:returnColor(props.activeAvatar,"itemText"),
                            borderColor: returnColor(props.activeAvatar,"itemText")
                        }}
                        >
                            Change Avatar
                        </span>
                    </div>
                    <div>
                        <a
                        className="download-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://dl.dropbox.com/s/gwpnbbzztstd3rk/SAMPLE_RESUME.pdf.pdf?dl=0"
                        style={{
                            color:returnColor(props.activeAvatar,"itemText"),
                            borderColor: returnColor(props.activeAvatar,"itemText")
                        }}
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar;