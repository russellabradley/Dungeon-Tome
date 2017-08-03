import React from 'react'
import {
 BrowserRouter as Router,
 Route,
 Switch,
 Link
} from 'react-router-dom';

export default class Home extends React.Component {
    constructor () {
      super()
      this.state = {
        email: '',
        password: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleInput = this.handleInput.bind(this)
    }

    handleSubmit (e) {
      e.preventDefault()
      fetch('http://localhost:3000/user_token', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({"auth": {"email": this.state.email, "password": this.state.password}})
      })
      .then(res => res.json())
      .then(data => {
        window.localStorage.token = data.jwt
      })
      // redirect to campaigns page
      // browserHistory.push('/campaigns')
    }

    handleInput (e) {
      this.setState({
        [e.target.id]: e.target.value
      })
    }

    render () {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
              <input id='email' onChange={this.handleInput} />
            <input id='password' onChange={this.handleInput} />
            <button className="btn waves-effect waves-light" type='submit'>Submit</button>
          </form>
        </div>
      )
    }
}
