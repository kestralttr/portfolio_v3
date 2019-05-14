import React from 'react'
import './Alex.css'

class Alex extends React.Component {
    constructor(props) {
        super(props);

        this.contentContainer = React.createRef();
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    scrollToBottom() {
        this.contentContainer.current.scrollTop = this.contentContainer.current.scrollHeight;
    }

    componentDidUpdate(prevProps,prevState) {
        this.scrollToBottom();
    }

    render() {
        return(
            <div className="content-container" ref={this.contentContainer}>
                {this.props.renderAllMessages()}
            </div>
        );
    }
}

export default Alex;