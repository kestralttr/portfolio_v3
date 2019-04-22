import React from 'react'
import './Link.css'

const Link = props => {
    if(props.link) {
        let imageSrc = `url(${props.link.imageSrc})`;
        return(
            <div className="link-container">
            <a className="link-url" href={props.link.url} target="_blank">{props.link.text}</a>
            <div className="link-image" style={{backgroundImage:imageSrc}}></div>
            </div>
        )
    } else {
        return(null);
    }
}

export default Link;