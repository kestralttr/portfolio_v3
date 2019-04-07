import React from 'react'
import About from 'Components/middleSections/About/About.js'
import Experience from 'Components/middleSections/Experience/Experience.js'
import Projects from 'Components/middleSections/Projects/Projects.js'
import Contact from 'Components/middleSections/Contact/Contact.js'

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
            case "projects":
                return <Projects />
            case "contact":
                return <Contact />
            default:
                return null;
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