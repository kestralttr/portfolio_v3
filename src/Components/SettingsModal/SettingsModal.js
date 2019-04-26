import React from 'react'
import './SettingsModal.css'

const SettingsModal = (props) => {
    if(!props.active) {
        return null;
    }
    return(
        <div className="background-overlay" onClick={props.closeSettingsModal}>
            <div className="container">
                <div className="modal-top">
                <div className="my-face">
                    <img src="http://www.imagemagick.org/Usage/thumbnails/thumbnail.gif" alt="Author Face"/>
                </div>
                <div className="modal-header">
                    <div>
                    <h1>Welcome to my Slack-themed portfolio site!</h1>
                    <div>Pick your avatar and preferred theme below, then close this window to get started.</div>
                    <div>And don't worry, you can return to this menu at any time by clicking the Settings icon in the top right corner.</div>
                    </div>
                </div>
                </div>
                <div className="modal-bottom">
                <div className="selection-container">
                    <div className="selection"></div>
                    <div className="selection"></div>
                    <div className="selection"></div>
                </div>
                <div className="selection-container">
                    <div className="selection"></div>
                    <div className="selection"></div>
                    <div className="selection"></div>
                </div>
                <div className="button-container">
                    <div className="close-button">Close</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal;