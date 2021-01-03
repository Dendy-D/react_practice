import React, { Component } from 'react'
import shortid from 'shortid'

class ToDoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    })
    this.setState({
      text: ""
    })
  }

  handleAllDelete = () => {
    console.log(11);
  }

  render() {
    return (
      <form className='row' onSubmit={this.handleSubmit}>
        <div className='input-group'>
          <input
            type="text"
            name='text'
            value={this.state.text}
            placeholder='todo...'
            onChange={this.handleChange}
            className='form-control'
          />
          <button onClick={this.handleSubmit} className='btn btn-outline-primary btn-sm ml-3'>Add ToDo</button>
          <button onClick={this.handleAllDelete} className='btn btn-outline-danger btn-sm ml-5'>Delete all</button>
        </div>
      </form>
    )
  }
}

export default ToDoForm
