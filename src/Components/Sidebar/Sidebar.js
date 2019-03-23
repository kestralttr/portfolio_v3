import React from 'react'
import './Sidebar.css';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        return(
            <div className="Sidebar">
                <div className="Sidebar-header">
                    <div>Alex Bennett</div>
                    <div>user</div>
                </div>
                <div className="Sidebar-chat-container">
                    <div className="Sidebar-chat-container-header">Channels</div>
                    <ul>
                        <li># about</li>
                        <li># experience</li>
                        <li># projects</li>
                        <li># contact</li>
                    </ul>
                </div>
                <div className="Sidebar-chat-container">
                    <div className="Sidebar-chat-container-header">Direct Messages</div>
                    <ul>
                        <li>> alex</li>
                        <li>> user</li>
                    </ul>
                </div>
            </div>
        )
    }
}