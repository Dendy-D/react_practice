import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, job } = this.state

    return (
      <form>
        <h3 className='font-weight-bold mt-4 mb-3'>Add New</h3>
        <div className='col-12'>
          <label htmlFor="name" className='font-weight-bold'>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className='form-control'
            value={name}
            onChange={this.handleChange} />
        </div>
        <div className='col-12'>
          <label htmlFor="job" className='font-weight-bold'>Job</label>
          <input
            type="text"
            name="job"
            id="job"
            className='form-control'
            value={job}
            onChange={this.handleChange} />
        </div>
        <div className='col mt-3'>
          <input type='button' value='Submit' onClick={this.submitForm} className='btn btn-primary' />
        </div>
      </form>
    )
  }

}

export default Form
