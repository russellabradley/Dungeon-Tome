import React from 'react'
import { Redirect } from 'react-router'
import {
 BrowserRouter as Router,
 Route,
 Switch,
 Link
} from 'react-router-dom';


class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      signupEmail: '',
      signupPassword: ''
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleLogin (event) {
    event.preventDefault()
    fetch('/user_token', {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({"auth": {"email": this.state.email, "password": this.state.password}})
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.jwt) {
        window.localStorage.token = data.jwt
        this.props.history.push('/campaigns')
      } else {
        // set state error true and show a div that says bad login
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleSignup(event) {
    event.preventDefault();
    fetch('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({email: this.state.signupEmail, password: this.state.signupPassword})
    }).then(response => {
    	if (response.ok) {
    	  return response;
    	} else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
    	}
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  handleInput (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render () {

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s1 m2">
            </div>
            <div className="col s10 m8">
              <h4 className="center">Log In</h4>
              <form onSubmit={this.handleLogin}>
                <input id='email' onChange={this.handleInput} />
                <label for="email">Email</label>
                <input id='password' onChange={this.handleInput} />
                <label for="password">Password</label>
                <button className="btn waves-effect waves-light" type='submit'>Log In</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col s10 m8">
              <h4 className="center">Sign Up</h4>
              <form onSubmit={this.handleSignup}>
                <input id='signupEmail' onChange={this.handleInput} />
                <label for="signupEmail">Email</label>
                <input id='signupPassword' onChange={this.handleInput} />
                <label for="signupPassword">Password</label>
                <button className="btn waves-effect waves-light" type='submit'>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
