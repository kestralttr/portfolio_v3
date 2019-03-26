import React from 'react'

const ChatContainer = props => {
    const children = React.Children.map(props.children, child => {
        return(
            <li onClick={props.updateCurrentSection(`${child}`)} >{props.icon} {child}</li>
        )
    });
    return(
        <div className="Sidebar-chat-container">
        <div className="Sidebar-chat-container-header">{props.header}</div>
        <ul>
            {children}
        </ul>
    </div>
    )
}

export default ChatContainer;