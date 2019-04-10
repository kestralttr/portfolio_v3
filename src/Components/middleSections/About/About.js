import React from 'react'
import './About.css'

const About = props => {
    return(
        <React.Fragment>
            <div className="section-container">
                <div className="message">
                    <div className="profile-pic"></div>
                    <div className="author-name">
                        Alex 11:30am
                    </div>
                    <div className="text-container">
                        Let's test out this here message
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;