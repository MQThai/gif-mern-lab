import React, {Component} from 'react'
import Axios from 'axios'
import './Add.css'

class Add extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: '',
      title: '',
      tags: ''
    }
    this.handleAddGif = this.handleAddGif.bind(this)
    this.handleUrl = this.handleUrl.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleTags = this.handleTags.bind(this)
  }
  handleAddGif (event) {
    event.preventDefault()
    Axios.post('http://localhost:3001/gifs', {
      url: this.state.url,
      title: this.state.title,
      tags: this.state.tags
    })
  }
  handleUrl (event) {
    let url = event.target.value
    this.setState({url: url})
  }
  handleTitle (event) {
    let title = event.target.value
    this.setState({title: title})
  }
  handleTags (event) {
    let tags = event.target.value
    this.setState({tags: tags})
  }
  render () {
    return (
      <form className='Add-gif'>
        <label>
          URL:
          <input onChange={this.handleUrl} type='text' name='url' autoComplete='off' required />
        </label>
        <label>
          Title:
          <input onChange={this.handleTitle} type='text' name='title' autoComplete='off' required />
        </label>
        <label>
          Tags:
          <input onChange={this.handleTags} type='text' name='tags' autoComplete='off' required />
        </label>
        <input onClick={this.handleAddGif} type='submit' value='Add' />
      </form>
    )
  }
}

export default Add
