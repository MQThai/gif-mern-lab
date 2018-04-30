import React, {Component} from 'react'
import Axios from 'axios'

class Edit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: '',
      title: '',
      tags: ''
    }
    this.handleEditGif = this.handleEditGif.bind(this)
  }
  handleEditGif (event) {
    event.preventDefault()
    let id = this.props.match.params._id
    Axios.put(`http://localhost:3001/gifs/${id}`)
      .then(response => {
        this.setState({gif: response.data.gif})
      })
      .catch(error => console.log(error))
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
      <form>
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
        <input onClick={this.handleEditGif} type='submit' value='Edit' />
      </form>
    )
  }
}

export default Edit
