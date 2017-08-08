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
      email: '',
      password: '',
      signupEmail: '',
      signupPassword: '',
      badLogin: false,
      badSignup: false,
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
    if (this.submissionIsValid(this.state.email, this.state.password)) {
      fetch('/user_token', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({"auth": {"email": this.state.email, "password": this.state.password}})
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
        if (data.jwt) {
          window.localStorage.token = data.jwt
          this.props.history.push('/campaigns')
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
    if (this.submissionIsValid(this.state.signupEmail, this.state.signupPassword)) {
      fetch('/api/v1/users', {
        method: 'POST',
        body: JSON.stringify({email: this.state.signupEmail, password: this.state.signupPassword})
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
    } else {
      this.setState({badSignup: true})
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
    }

    let signupErrorMessage
    if (this.state.badSignup) {
      signupErrorMessage =
        <p className="red-text lighten-2">Please enter a valid email and password.</p>
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
