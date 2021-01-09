import React, { Component } from 'react'
import shortid from 'shortid'

class FormWorker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      job: '',
    }
  }

  handleChange = (event) => {
    if (event.target.placeholder === 'Name') {
      this.setState({
        name: event.target.value,
      })
    }

    if (event.target.placeholder === 'Job') {
      this.setState({
        job: event.target.value,
      })
    }
  }

  handleAdd = (event) => {
    event.preventDefault()
    this.props.onSubmit({
      name: this.state.name,
      job: this.state.job,
      id: shortid.generate(),
      number: this.props.workers.length,
    })
    this.setState({
      name: '',
      job: '',
      number: this.props.workers.length,
    })
  }

  render() {
    return (
      <>
        <div className='row mb-3'>
          <div className='col-12'>
            <h2>Add new</h2>
          </div>
        </div>
        <div className='row mb-4'>
          <div className='col-12'>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='text'
              id='name'
              placeholder='Name'
              value={this.state.name}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12'>
            <input
              onChange={this.handleChange}
              className='form-control'
              type='text'
              id='job'
              placeholder='Job'
              value={this.state.job}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <button className='btn btn-primary' onClick={this.handleAdd}>
              Add new
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default FormWorker
