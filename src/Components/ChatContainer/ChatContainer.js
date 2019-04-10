import React from 'react'

const ChatContainer = props => {
    let activeClass = "";
    const children = React.Children.map(props.children, child => {
        activeClass = "";
        if(props.currentSection && props.currentSection === child) {
            activeClass = "active-section"
        }
        return(
            <li className={activeClass} onClick={props.updateCurrentSection(`${child}`)} >{props.icon} {child}</li>
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

export default ChatContainer;