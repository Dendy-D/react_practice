import React, { Component } from 'react'
import shortid from 'shortid'

class PriceForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      price: '',
      maxPrice: '75',
    }
  }

  handleChange = (event) => {
    if (event.target.placeholder === 'Name') {
      this.setState({
        name: event.target.value
      })
    }
    if (event.target.placeholder === 'Price') {
      this.setState({
        price: event.target.value
      })
    }
    if (event.target.type === 'range') {
      this.setState({
        maxPrice: event.target.value
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit({
      name: this.state.name,
      price: this.state.price,
      key: shortid.generate(),
      maxPrice: this.state.maxPrice,
    })
    this.setState({
      name: '',
      price: '',
    })
  }

  render() {
    return (
      <div className='row'>
        <div className='col-12 mb-1 mt-3'>
          <h3>Worker Form</h3>
        </div>
        <form className='row ml-3 mt-3' onSubmit={this.handleSubmit}>
          <div className='col-6'>
            <input
              className='form-control'
              type="text"
              placeholder='Name'
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className='col-6'>
            <input
              className='form-control'
              type="text"
              placeholder='Price'
              onChange={this.handleChange}
              value={this.state.price}
            />
          </div>
          <div className="col-6 mt-4">
            <button onClick={this.handleSubmit} className='btn btn-outline-primary'>Add new product</button>
          </div>
          <div className="col-6 mt-4">
            <span>Max Price</span>
            <input
              type="range"
              min='10'
              max='150'
              value={this.state.maxPrice}
              onChange={this.handleChange}
              style={{ cursor: 'pointer' }}
            />
            <span style={{ marginLeft: '10px', position: 'absolute' }}>{this.state.maxPrice}</span>
          </div>
        </form>
      </div>
    )
  }
}

export default PriceForm
