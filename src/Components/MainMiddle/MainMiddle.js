import React from 'react'
import About from 'Components/middleSections/About/About.js'
import Experience from 'Components/middleSections/Experience/Experience.js'
import Work from 'Components/middleSections/Work/Work.js'
import Contact from 'Components/middleSections/Contact/Contact.js'
import User from 'Components/middleSections/User/User.js'
import Alex from 'Components/middleSections/Alex/Alex.js'
import './MainMiddle.css'

export default class MainMiddle extends React.Component {
    constructor(props) {
        super(props);

        this.renderSection = this.renderSection.bind(this);
    }

    renderSection() {
        switch (this.props.currentSection) {
            case "about":
                return <About />;
            case "experience":
                return <Experience />;
            case "work":
                return <Work />;
            case "contact":
                return <Contact />;
            case "alex":
                return <Alex />;
            default:
                return <User />;
        }
    }

    render() {
        return(
            <div className="main-middle">
                {this.renderSection()}
            </div>
        )
    }

}