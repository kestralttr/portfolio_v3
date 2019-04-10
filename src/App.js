import React, { Component } from 'react';
import Sidebar from 'Components/Sidebar/Sidebar.js'
import Main from 'Components/Main/Main.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSection: "about"
    }

    this.updateCurrentSection = this.updateCurrentSection.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Sidebar updateCurrentSection={this.updateCurrentSection} currentSection={this.state.currentSection}/>
        <Main currentSection={this.state.currentSection} />
      </div>
    );
  }

  // helper functions

  updateCurrentSection(section) {
    return (e) => {
      this.setState({
        currentSection: section
      })
    }
  }

}

export default App;
