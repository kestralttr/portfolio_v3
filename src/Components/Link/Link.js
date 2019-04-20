import React from 'react'
import './Link.css'

const Link = props => {
    if(props.link) {
        return(
            <div className="link-container">
            <a href={props.link.url} target="_blank">{props.link.text}</a>
            </div>
        )
    } else {
        return(null);
    }
}

export default Link;