import React, { Component } from 'react';

class TextBar extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  sendMessage = () => {
    this.props.onSend && this.props.onSend(this.input.current.value);
    this.input.current.value = '';
  }

  sendMessageIfEnter = (e) => {
    if (e.keyCode === 13) {
      this.sendMessage();
    }
  }

  render() {
    return (
      <div className='textbar'>
        <input className='textbar-input' type='text' ref={this.input} onKeyDown={this.sendMessageIfEnter.bind(this)}/>
        <button className='textbar-send' onClick={this.sendMessage.bind(this)}>
          Send
        </button>
      </div>
    );
  }
}

export default TextBar;