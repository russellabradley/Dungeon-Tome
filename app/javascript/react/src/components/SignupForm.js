import React from 'react'

const SignupForm = props => (
  <div className="container">
    <p></p>
    <h4 className="center header-cinzel-font">Sign Up</h4>
    {props.signupErrorMessage}
    <form onSubmit={props.handleSignup}>
      <p>Please enter a username:</p>
        <input id='signupUsername' onChange={props.handleInput} />
      <p>And a password:</p>
        <input type="password" id='signupPassword' onChange={props.handleInput} />
      <button className="btn blue lighten-2 right" type='submit'>Create Account</button>
    </form>
    <button className="btn red lighten-2" onClick={props.toggleSignup}>Cancel</button>
    <p></p>
  </div>
)

export default SignupForm;
