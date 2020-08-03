import React, { Component } from 'react';
import './MessageWindow.css';

const Message = ({ text, username, self }) => (
  <div className={'message' + (self ? ' message-self' : '')}>
    <div className='message-username'>{username}</div>
    <div className='message-text'>{text}</div>
  </div>
);

class MessageWindow extends Component {
  constructor(props) {
    super(props);
    this.messageWindow = React.createRef();
  }
  componentDidUpdate() {
    const messageWindow = this.messageWindow.current;
    messageWindow.scrollTop = messageWindow.scrollHeight - messageWindow.clientHeight;
  }
  render() {
    const { messages = [], username } = this.props;
    return (
      <div className='message-window' ref={this.messageWindow}>
        {messages.map((message, i) => {
          return <Message key={i} text={message.text} username={message.username} self={username === message.username} />
        })}
        <div>&nbsp;</div>
      </div>
    );
  }
}

export default MessageWindow;