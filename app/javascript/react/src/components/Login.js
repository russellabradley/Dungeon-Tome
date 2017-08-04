import React from 'react'
import { Redirect } from 'react-router'
import {
 BrowserRouter as Router,
 Route,
 Switch,
 Link
} from 'react-router-dom';


export default class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault()
    fetch('http://localhost:3000/user_token', {
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

  handleInput (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render () {

    return (
      <div className="container">
        <div className="row">
          <div className="col s10 m8">
            <div className="row">
              <form onSubmit={this.handleSubmit}>
                <input id='email' onChange={this.handleInput} />
                <label for="email">Email</label>
                <input id='password' onChange={this.handleInput} />
                <button className="btn waves-effect waves-light" type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
