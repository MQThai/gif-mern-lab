import React, {Component} from 'react'

class Signup extends Component {
  render () {
    return (
      <form action='/signup'>
        <div>
          <label>Username</label>
          <input type='text' name='username' autocomplete='off' />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' />
        </div>
        <input type='submit' value='Sign u' />
      </form>
    )
  }
}

export default Signup
