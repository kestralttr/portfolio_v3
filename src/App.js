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
      currentChannel: "about",
      settingsModalActive: true,
      activeAvatar: "darth_vader",
      messageData: {
        alex: [],
        user: []
      },
      mobileSidebarVisible: false
    }

    this.updateCurrentChannel = this.updateCurrentChannel.bind(this);
    this.openSettingsModal = this.openSettingsModal.bind(this);
    this.closeSettingsModal = this.closeSettingsModal.bind(this);
    this.selectAvatar = this.selectAvatar.bind(this);
    this.saveMessageDataObject = this.saveMessageDataObject.bind(this);
    this.showMobileSidebar = this.showMobileSidebar.bind(this);
    this.hideMobileSidebar = this.hideMobileSidebar.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Sidebar visible={this.state.mobileSidebarVisible} hideMobileSidebar={this.hideMobileSidebar} openSettingsModal={this.openSettingsModal} updateCurrentChannel={this.updateCurrentChannel} currentChannel={this.state.currentChannel} activeAvatar={this.state.activeAvatar} />
        <Main mobileSidebarVisible={this.state.mobileSidebarVisible} showMobileSidebar={this.showMobileSidebar} currentChannel={this.state.currentChannel} openSettingsModal={this.openSettingsModal} messageData={this.state.messageData} saveMessageDataObject={this.saveMessageDataObject} activeAvatar={this.state.activeAvatar}/>
        <SettingsModal active={this.state.settingsModalActive} closeSettingsModal={this.closeSettingsModal} activeAvatar={this.state.activeAvatar} selectAvatar={this.selectAvatar} />
      </div>
    );
  }

  // helper functions

  showMobileSidebar() {
    this.setState({mobileSidebarVisible:true});
  }

  hideMobileSidebar() {
    this.setState({mobileSidebarVisible:false});
  }

  selectAvatar(avatar) {
    return (e) => {
      this.setState({activeAvatar: avatar});
    }
  }

  updateCurrentChannel(section) {
    return (e) => {
      this.setState({
        currentChannel: section
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
    let channelName = channel === 'alex' ? 'alex' : 'user';
    let messageDataState = merge({},this.state.messageData);
    messageDataState[channelName].push(messageObject);
    this.setState({messageData:messageDataState});
  }

}

export default App;
