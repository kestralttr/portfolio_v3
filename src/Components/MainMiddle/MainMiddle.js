import React from 'react'
import About from 'Components/middleSections/About/About.js'
import Experience from 'Components/middleSections/Experience/Experience.js'


export default class MainMiddle extends React.Component {
    constructor(props) {
        super(props);

        this.renderSection = this.renderSection.bind(this);
    }

    renderSection() {
        console.log(this.props.currentSection)
        switch (this.props.currentSection) {
            case "about":
                return <About />;
            case "experience":
                return <Experience />;
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