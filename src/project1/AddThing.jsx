import React, { Component } from 'react'

class AddThing extends Component {
  constructor() {
    super()

    this.state = {
      value: '',
      itemArray: []
    }
    this.focus = this.focus.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addThing = this.addThing.bind(this)
  }

  focus(event) {
    event.target.focus()
  }

  addThing() {
    const item = this.state.itemArray
    item.push(
      <div className='width p-3'>
        <div className='width'>{this.state.value}</div>
        <div>bot</div>
      </div>
    )

    this.setState({ itemArray: item })
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div>
        <div className='row d-flex justify-content-around mt-5'>
          <div className='col-3'>
            <input
              type='text'
              placeholder='Input name thing'
              className='form-control'
              onMouseMove={this.focus}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button className='btn btn-primary' onClick={this.addThing} >Add thing</button>
          </div>

          <div className='col-3'>
            <input
              type='text'
              placeholder='Input price'
              className='form-control'
              onMouseMove={this.focus}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>

        </div >
        <div className='row mt-5'>
          {this.state.itemArray.map((item, index) => {
            return (
              <div className='border m-3' key={index}>{item}</div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AddThing
