import React from 'react'

export default class Home extends React.Component {
    constructor () {
      super()
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleInput = this.handleInput.bind(this)
      this.state = {
        email: '',
        password: ''
      }
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
            <button type='submit'>Submit</button>
          </form>
        </div>
      )
    }
}
