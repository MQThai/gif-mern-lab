import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Giftable.css'

class Giftable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filtered: [],
      search: ''
    }
    this.searchField = this.searchField.bind(this)
  }
  searchField (event) {
    event.preventDefault()
    this.setState({search: event.target.value})
  }
  render () {
    let gifs = this.props.gifs.map((gif, i) => {
      let path = `/gifs/${gif._id}`
      return (
        <li key={i}>
          <Link to={path}><img src={gif.url} alt='gif' /></Link>
        </li>
      )
    })
    return (
      <div className='Gif-table'>
        <form>
          <Link to='/add'>Add a GIF</Link>
          <input onChange={this.searchField} type='search' placeholder='Search GIFs' />
        </form>
        <div>
          {gifs}
        </div>
      </div>
    )
  }
}

export default Giftable
