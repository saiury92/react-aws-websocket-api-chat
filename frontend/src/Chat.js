import React, { Component } from 'react';

import TextBar from './TextBar';
import MessageWindow from './MessageWindow';

class Chat extends Component {
  state = {
    username: null,
    messages: [],
  }

  sendUserName =  name =>
    this.setState({ username: name })

  sendMessage = text => {
    const msg = { username: this.state.username, text: text };
    this.setState({ messages: this.state.messages.concat(msg) });
  }
  
  render() {
    if (this.state.username === null) {
      return (
        <div className='container'>
          <div className='container-title'>Enter your username</div>
          <TextBar onSend={this.sendUserName.bind(this)}/>
        </div>
      );
    }
    return (
      <div className='container'>
        <div className='container-title'>Messages</div>
      <MessageWindow messages={this.state.messages} username={this.state.username}/>
      <TextBar onSend={this.sendMessage.bind(this)}/>
      </div>
    );
  }
}

export default Chat;