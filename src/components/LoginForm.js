import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameInputChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordInputChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={this.handleUsernameInputChange}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password} 
              onChange={this.handlePasswordInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">
              Log in
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
