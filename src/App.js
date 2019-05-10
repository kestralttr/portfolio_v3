import React, { Component } from 'react';
import Sidebar from 'Components/Sidebar/Sidebar.js'
import Main from 'Components/Main/Main.js'
import SettingsModal from 'Components/SettingsModal/SettingsModal.js'
import { merge } from 'lodash'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentSection: "about",
      settingsModalActive: true,
      activeAvatar: "Darth_Vader",
      messageData: {
        alex: [],
        user: []
      }
    }

    this.updateCurrentSection = this.updateCurrentSection.bind(this);
    this.openSettingsModal = this.openSettingsModal.bind(this);
    this.closeSettingsModal = this.closeSettingsModal.bind(this);
    this.selectAvatar = this.selectAvatar.bind(this);
    this.saveMessageDataObject = this.saveMessageDataObject.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Sidebar updateCurrentSection={this.updateCurrentSection} currentSection={this.state.currentSection} activeAvatar={this.state.activeAvatar} />
        <Main currentSection={this.state.currentSection} openSettingsModal={this.openSettingsModal} saveMessageDataObject={this.saveMessageDataObject}/>
        <SettingsModal active={this.state.settingsModalActive} closeSettingsModal={this.closeSettingsModal} activeAvatar={this.state.activeAvatar} selectAvatar={this.selectAvatar} />
      </div>
    );
  }

  // helper functions

  selectAvatar(avatar) {
    return (e) => {
      this.setState({activeAvatar: avatar});
    }
  }

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

  saveMessageDataObject(channel,messageObject) {
    let messageDataState = merge({},this.state.messageData);
    messageDataState[channel].push(messageObject);
    this.setState({messageData:messageDataState});

  }

}

export default App;
