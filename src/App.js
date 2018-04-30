import React, { Component } from 'react'
import {Route, Link, Redirect, Switch} from 'react-router-dom'
import Axios from 'axios'
import Add from './Add'
import Giftable from './Giftable'
import Gif from './Gif'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gifs: []
    }
  }
  componentDidMount () {
    Axios.get('http://localhost:3001/gifs')
      .then(response => {
        console.log(response)
        this.setState({gifs: response.data.gifs})
      })
      .catch(error => console.log(error))
  }
  render () {
    return (
      <div>
        <nav>
          <h1>GIF Library</h1>
          <ul>
            <li><Link to='/login'>Log In</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path='/gifs' render={() => (<Giftable gifs={this.state.gifs} />)} />
            <Route path='/gifs/:_id' render={(props) => <Gif {...props} gifs={this.state.gifs} />} />
            <Route path='/add' render={() => <Add />} />
            <Route path='/*' render={() => <Redirect to='/gifs' />} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
