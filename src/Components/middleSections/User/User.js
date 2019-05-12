import React from 'react'

const User = props => {
    return(
        <div className="content-container">
            {props.renderAllMessages()}
        </div>
    );
}

export default User;