import React, { Component } from 'react'
import shortid from 'shortid'

class WorkerForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      surname: '',
      position: '',
      number: 1,
    }
  }

  handleChange = event => {
    if (event.target.placeholder === 'Name') {
      this.setState({
        name: event.target.value
      })
    } else if (event.target.placeholder === 'Surname') {
      this.setState({
        surname: event.target.value
      })
    } else if (event.target.placeholder === 'Position') {
      this.setState({
        position: event.target.value
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit({
      key: shortid.generate(),
      name: this.state.name,
      surname: this.state.surname,
      position: this.state.position,
      number: shortid.generate()
    })
    this.setState({
      name: '',
      surname: '',
      position: '',
      number: shortid.generate()
    })
  }



  render() {
    return (
      <form className='row' onSubmit={this.handleSubmit}>
        <div className='d-flex justify-content-between col-12 mt-3 mb-3'>
          <div>
            <h3>Worker Form</h3>
          </div>
          <div className='mr-5'>
            <span>Amount workers: {this.props.res.length}</span>
          </div>
        </div>
        <div className='col-4'>
          <input
            value={this.state.name}
            className='form-control'
            type="text"
            placeholder='Name'
            onChange={this.handleChange}
          />
        </div>
        <div className='col-4'>
          <input
            value={this.state.surname}
            className='form-control'
            type="text"
            placeholder='Surname'
            onChange={this.handleChange}
          />
        </div>
        <div className='col-4'>
          <input
            value={this.state.position}
            className='form-control'
            type="text"
            placeholder='Position'
            onChange={this.handleChange}
          />
        </div>
        <div className='col-6 mt-3'>
          <button onClick={this.handleSubmit} className='btn btn-outline-primary'>Add new Worker</button>
        </div>
      </form>
    )
  }
}

export default WorkerForm
