import React from "react";
import { EventEmitter } from "events";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleOnChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          onChange={this.handleOnChange}
          name="message" 
          id="message" 
          value={this.state.message} />
          {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
