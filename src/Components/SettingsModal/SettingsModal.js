import React from 'react'
import './SettingsModal.css'
import darth_vader from 'Images/avatar_thumbnails/darth_vader.jpg'
import hermione_granger from 'Images/avatar_thumbnails/hermione_granger.jpg'
import harley_quinn from 'Images/avatar_thumbnails/harley_quinn.jpg'
import the_hulk from 'Images/avatar_thumbnails/the_hulk.jpg'
import gandalf_the_white from 'Images/avatar_thumbnails/gandalf_the_white.jpg'
import tobias_funke from 'Images/avatar_thumbnails/tobias_funke.jpg'
import MUHFACE from 'Images/muhface.jpg'

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
    let muhFaceBackground = `url(${MUHFACE})`;
    return(
        <div className="background-overlay" onClick={props.closeSettingsModal}>
            <div className="settings-modal-container" onClick={stopPropagation}>
            <div className="close-button-x" onClick={props.closeSettingsModal}>X</div>
            <div className="close-button-word" onClick={props.closeSettingsModal}>
                <span>
                    Continue
                </span>
            </div>
                <div className="modal-top" style={{backgroundImage: muhFaceBackground}}>
                <div className="header-text-container">
                    <h1>Alex Bennett</h1>
                    <p>Front-End JavaScript Developer</p>
                    <br></br>
                    <p>Versatile web development engineer with proven advertising experience on global brands, looking to continue designing and building complex e-commerce web applications, while improving marketing and sales performance wherever and however possible.  </p>
                </div>
                </div>
                <div className="modal-bottom">
                    <p className="instructions">
                        If you want to know more about me and my work, choose your avatar and let's get started!
                    </p>
                    <div className="selection-container">
                        <img src={darth_vader} className={returnClassName("darth_vader", props.activeAvatar)} onClick={props.selectAvatar('darth_vader')} alt="Darth Vader"/>
                        <img src={hermione_granger} className={returnClassName("hermione_granger", props.activeAvatar)} onClick={props.selectAvatar('hermione_granger')} alt="Hermione Granger"/>
                        <img src={gandalf_the_white} className={returnClassName("gandalf_the_white", props.activeAvatar)} onClick={props.selectAvatar('gandalf_the_white')} alt="Gandalf The White"/>
                    </div>
                    <div className="selection-container">
                        <img src={the_hulk} className={returnClassName("the_hulk", props.activeAvatar)} onClick={props.selectAvatar('the_hulk')} alt="Black Widow"/>
                        <img src={tobias_funke} className={returnClassName("tobias_funke", props.activeAvatar)} onClick={props.selectAvatar('tobias_funke')} alt="Tobias Funke"/>
                        <img src={harley_quinn} className={returnClassName("harley_quinn", props.activeAvatar)} onClick={props.selectAvatar('harley_quinn')} alt="Wall E"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal;