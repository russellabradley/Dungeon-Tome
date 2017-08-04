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
      password: '',
      fireRedirect: false
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
        this.setState({ fireRedirect: true })
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(data => {
      window.localStorage.token = data.jwt
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  handleInput (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render () {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state

    return (
      <div className="container center-align">
        <div className="row">
          <div className="col s10 m8">
            <div className="card">
              <form onSubmit={this.handleSubmit}>
                <input id='email' onChange={this.handleInput} />
                <input id='password' onChange={this.handleInput} />
                <button className="btn waves-effect waves-light" type='submit'>Submit</button>
              </form>
              {fireRedirect && (<Redirect to={'/campaigns'}/>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
