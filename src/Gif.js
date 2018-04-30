import React, {Component} from 'react'
import Axios from 'axios'
import './Gif.css'

class Gif extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gif: {}
    }
  }
  componentDidMount () {
    let id = this.props.match.params._id
    Axios.get(`http://localhost:3001/gifs/${id}`)
      .then(response => {
        console.log(response)
        this.setState({gif: response.data.gif})
      })
      .catch(error => console.log(error))
  }
  render () {
    return (
      <div className='info'>
        <h2>{this.state.gif.title}</h2>
        <img src={this.state.gif.url} alt='gif' />
        <label>{this.state.gif.url}</label>
        <label>{this.state.gif.tags}</label>
      </div>
    )
  }
}

export default Gif
