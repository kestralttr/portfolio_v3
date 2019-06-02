import React from 'react'
import './Link.css'

function renderLink(link) {
    if(link.url) {
        return(
            <a className="link-url" href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
        );
    } else {
        return(
            <span className="non-valid-link-url">{link.text}</span>
        )
    }
}

const Link = props => {
    if(props.link) {
        let imageSrc = `url(${props.link.imageSrc})`;
        return(
            <div className="link-container">
                {renderLink(props.link)}
                <div className="link-description">{props.link.description}</div>
                <div className="link-image" style={{backgroundImage:imageSrc}}></div>
            </div>
        )
    } else {
        return(null);
    }
}

export default Link;