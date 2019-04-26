import React from 'react'
import './SettingsModal.css'
import Darth_Vader from 'Images/avatar_thumbnails/darth_vader.jpg'
import Hermione_Granger from 'Images/avatar_thumbnails/hermione_granger.jpg'
import Wall_E from 'Images/avatar_thumbnails/wall_e.jpg'
import Black_Widow from 'Images/avatar_thumbnails/black_widow.jpg'
import Gandalf_The_White from 'Images/avatar_thumbnails/gandalf_the_white.jpg'
import Tobias_Funke from 'Images/avatar_thumbnails/tobias_funke.jpg'

const stopPropagation = (e) => {
    e.stopPropagation();
}

const returnClassName = (avatarName,activeAvatar) => {
    if(avatarName === activeAvatar) {
        return "selectionActive";
    } else {
        return "selection";
    }
}

const SettingsModal = (props) => {
    if(!props.active) {
        return null;
    }
    return(
        <div className="background-overlay" onClick={props.closeSettingsModal}>
            <div className="container" onClick={stopPropagation}>
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
                    <img src={Darth_Vader} className={returnClassName("Darth_Vader", props.activeAvatar)} onClick={props.selectAvatar('Darth_Vader')} alt="Darth Vader"/>
                    <img src={Hermione_Granger} className={returnClassName("Hermione_Granger", props.activeAvatar)} onClick={props.selectAvatar('Hermione_Granger')} alt="Hermione Granger"/>
                    <img src={Gandalf_The_White} className={returnClassName("Gandalf_The_White", props.activeAvatar)} onClick={props.selectAvatar('Gandalf_The_White')} alt="Gandalf The White"/>
                </div>
                <div className="selection-container">
                    <img src={Black_Widow} className={returnClassName("Black_Widow", props.activeAvatar)} onClick={props.selectAvatar('Black_Widow')} alt="Black Widow"/>
                    <img src={Tobias_Funke} className={returnClassName("Tobias_Funke", props.activeAvatar)} onClick={props.selectAvatar('Tobias_Funke')} alt="Tobias Funke"/>
                    <img src={Wall_E} className={returnClassName("Wall_E", props.activeAvatar)} onClick={props.selectAvatar('Wall_E')} alt="Wall E"/>
                </div>
                <div className="button-container">
                    <div className="close-button" onClick={props.closeSettingsModal}>Close</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal;