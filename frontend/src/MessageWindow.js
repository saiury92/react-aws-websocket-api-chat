import React, { Component } from 'react';

const Message = ({ text, username }) => (
  <div>
    <div className='message-username'>{username}</div>
    <div className='message-text'>{text}</div>
  </div>
);

class MessageWindow extends Component {
  render() {
    const { messages = [], username } = this.props;
    return (
      <div className='message-windown'>
        <div>&nbsp;</div>
        {messages.map((message, i) => {
          return <Message key={i} text={message.text} username={message.username}/>
        })}
      </div>
    );
  }
}

export default MessageWindow;