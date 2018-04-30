import React, {Component} from 'react'

class Login extends Component {
  render () {
    return (
      <form action='/login'>
        <div>
          <label>Username</label>
          <input type='text' name='username' autocomplete='off' />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' />
        </div>
        <input type='submit' value='Log in' />
      </form>
    )
  }
}

export default Login
