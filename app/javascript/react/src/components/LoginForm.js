import React from 'react'

const LoginForm = props => (
  <div className="container">
    <h4 className="center header-cinzel-font">Log In</h4>
    {props.loginErrorMessage}
    <form onSubmit={props.handleLogin}>
      <p>Email</p>
        <input id='email' onChange={props.handleInput} />
      <p>Password</p>
        <input type="password" id='password' onChange={props.handleInput} />
      <button className="btn green lighten-2 right" type='submit'>Log In</button>
    </form>
    <button className="btn blue lighten-2" onClick={props.toggleSignup}>Sign Up</button>
  </div>
)

export default LoginForm;
