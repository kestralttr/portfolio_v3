import React from 'react'
import './Alex.css'

const Alex = props => {
    return(
        <div className="content-container">
            {props.renderAllMessages()}
        </div>
    );
}

export default Alex;