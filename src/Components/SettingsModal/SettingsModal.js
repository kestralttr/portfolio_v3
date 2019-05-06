import React from 'react'
import './SettingsModal.css'
import Darth_Vader from 'Images/avatar_thumbnails/darth_vader.jpg'
import Hermione_Granger from 'Images/avatar_thumbnails/hermione_granger.jpg'
import Harley_Quinn from 'Images/avatar_thumbnails/harley_quinn.jpg'
import The_Hulk from 'Images/avatar_thumbnails/the_hulk.jpg'
import Gandalf_The_White from 'Images/avatar_thumbnails/gandalf_the_white.jpg'
import Tobias_Funke from 'Images/avatar_thumbnails/tobias_funke.jpg'
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
            <div className="container" onClick={stopPropagation}>
            <div className="close-button" onClick={props.closeSettingsModal}>X</div>
                <div className="modal-top" style={{backgroundImage: muhFaceBackground}}>
                <div className="header-text-container">
                    <h1>Alex Bennett</h1>
                    <p>Front-End JavaScript Developer</p>
                    <br></br>
                    <p>Versatile Front-End Developer with 2+ years of professional experience designing, building, and improving complex e-commerce web applications.  Specializes in ReactJS/Redux.  </p>
                </div>
                </div>
                <div className="modal-bottom">
                    <p className="instructions">
                        If you want to know more about me and my work, choose your avatar and let's get started!
                    </p>
                <div className="selection-container">
                    <img src={Darth_Vader} className={returnClassName("Darth_Vader", props.activeAvatar)} onClick={props.selectAvatar('Darth_Vader')} alt="Darth Vader"/>
                    <img src={Hermione_Granger} className={returnClassName("Hermione_Granger", props.activeAvatar)} onClick={props.selectAvatar('Hermione_Granger')} alt="Hermione Granger"/>
                    <img src={Gandalf_The_White} className={returnClassName("Gandalf_The_White", props.activeAvatar)} onClick={props.selectAvatar('Gandalf_The_White')} alt="Gandalf The White"/>
                </div>
                <div className="selection-container">
                    <img src={The_Hulk} className={returnClassName("The_Hulk", props.activeAvatar)} onClick={props.selectAvatar('The_Hulk')} alt="Black Widow"/>
                    <img src={Tobias_Funke} className={returnClassName("Tobias_Funke", props.activeAvatar)} onClick={props.selectAvatar('Tobias_Funke')} alt="Tobias Funke"/>
                    <img src={Harley_Quinn} className={returnClassName("Harley_Quinn", props.activeAvatar)} onClick={props.selectAvatar('Harley_Quinn')} alt="Wall E"/>
                </div>
                {/* <div className="button-container">
                    <div className="close-button" onClick={props.closeSettingsModal}>Close</div>
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default SettingsModal;