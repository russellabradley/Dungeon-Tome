import React from 'react'
import { Redirect } from 'react-router'
import {
 BrowserRouter as Router,
 Route,
 Switch,
 Link
} from 'react-router-dom';

import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'


class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      signupUsername: '',
      signupPassword: '',
      badLogin: false,
      badSignup: false,
      userCreated: false,
      signupShow: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
    this.submissionIsValid = this.submissionIsValid.bind(this);
  }

  componentWillMount() {
    if (window.localStorage.getItem('token')) {
      {this.props.history.push('/campaigns')}
    }
  }

  handleLogin (event) {
    event.preventDefault()
    // add validations before submitting
    if (this.submissionIsValid(this.state.username, this.state.password)) {
      fetch('/user_token', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({"auth": {"email": this.state.username, "password": this.state.password}})
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          // set state error true and show a div that says bad login
          this.setState({badLogin: true})
          // Error message
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(data => {
        // If the token is returned, set it in localstorage
        if (data.jwt) {
          window.localStorage.token = data.jwt
          this.props.history.push('/campaigns') // redirect to campaigns page
        } else {
          // set state error true and show a div that says bad login
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    } else {
      // set state error true and show a div that says bad login
      this.setState({badLogin: true})
    }
  }

  handleSignup(event) {
    event.preventDefault();
    if (this.submissionIsValid(this.state.signupUsername, this.state.signupPassword)) {
      fetch('/api/v1/users', {
        method: 'POST',
        body: JSON.stringify({email: this.state.signupUsername, password: this.state.signupPassword})
      }).then(response => {
        if (response.ok) {
          return response;
        } else {
          this.setState({badSignup: true})
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
      // Set the login credentials to the new signup ones
      this.setState({
        username: this.state.signupUsername,
        password: this.state.signupPassword,
        signupShow: false, // Bring us back to login screen
        badSignup: false, // Gets rid of bad signup error
        userCreated: true // Shows user created message
      })
    } else {
      this.setState({badSignup: true}) // Show bad signup error
    }
  }

  handleInput (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  toggleSignup () {
    this.setState({signupShow: !this.state.signupShow})
  }

  submissionIsValid(e, p) {
    if (e === '' || p === '') {
      debugger;
      return false
    } else {
      return true
    }
  }

  render () {

    let loginErrorMessage
    if (this.state.badLogin) {
      loginErrorMessage =
        <p className="red-text lighten-2">Please enter a valid username and password.</p>
    } else if (this.state.userCreated) {
      loginErrorMessage =
        <p className="green-text lighten-2">Account created successfully!</p>
    }

    let signupErrorMessage
    if (this.state.badSignup) {
      signupErrorMessage =
        <p className="red-text lighten-2">Please enter a valid username and password.</p>
    }

    let loginOrSignup
    if (this.state.signupShow) {
      loginOrSignup =
        <SignupForm
          handleSignup={this.handleSignup}
          handleInput={this.handleInput}
          toggleSignup={this.toggleSignup}
          signupErrorMessage={signupErrorMessage}
        />
    } else {
      loginOrSignup =
        <LoginForm
        handleLogin={this.handleLogin}
        handleInput={this.handleInput}
        toggleSignup={this.toggleSignup}
        loginErrorMessage={loginErrorMessage}
        usernameValue={this.state.username}
        passwordValue={this.state.password}
        />
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col m2">
            </div>
            <div className="col s12 m8">
              <div className="login-background white-text">
              {loginOrSignup}
              </div>
            </div>
          </div>
        </div>
        <div className="login-background-image">
        </div>
      </div>
    )
  }
}

export default Login;
