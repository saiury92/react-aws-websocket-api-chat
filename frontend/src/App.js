import React, { Component } from 'react';
import './App.css';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Chat App Using AWS API Gateway Websocket</h1>
        <Chat />
      </div>
    );
  }
}

export default App;
