import React, { Component } from 'react';

import TextBar from './TextBar';
import MessageWindow from './MessageWindow';

const URL = 'wss://a1vejwabbk.execute-api.ap-southeast-1.amazonaws.com/Prod'

class Chat extends Component {
  state = {
    username: null,
    messages: [],
  }

  componentDidMount() {
    this.setState({ ws: this.createWebSocket(URL) });
  }

  createWebSocket = url => {
    let ws = new WebSocket(url)

    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    }

    ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      this.addMessage(JSON.parse(evt.data));
    }

    ws.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      });
    }

    return ws;
  }

  addMessage = msg => {
    console.log(msg);
    this.setState({ messages: this.state.messages.concat(msg) });
  }

  sendUserName =  name =>
    this.setState({ username: name })

  sendMessage = text => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const msg = { action: 'sendmessage', username: this.state.username, text: text };
    this.state.ws.send(JSON.stringify(msg));
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