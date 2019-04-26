import React, { Component } from 'react';
import Sidebar from 'Components/Sidebar/Sidebar.js'
import Main from 'Components/Main/Main.js'
import SettingsModal from 'Components/SettingsModal/SettingsModal.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSection: "about",
      settingsModalActive: true
    }

    this.updateCurrentSection = this.updateCurrentSection.bind(this);
    this.openSettingsModal = this.openSettingsModal.bind(this);
    this.closeSettingsModal = this.closeSettingsModal.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Sidebar updateCurrentSection={this.updateCurrentSection} currentSection={this.state.currentSection}/>
        <Main currentSection={this.state.currentSection} openSettingsModal={this.openSettingsModal} />
        <SettingsModal active={this.state.settingsModalActive} closeSettingsModal={this.closeSettingsModal} />
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

  openSettingsModal(e) {
    this.setState({settingsModalActive:true});
  }

  closeSettingsModal(e) {
    e.stopPropagation();
    this.setState({settingsModalActive:false});
  }

}

export default App;
