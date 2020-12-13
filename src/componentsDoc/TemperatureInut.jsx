import React, { Component } from 'react'
import BoolingVerdict from './BoolingVerdict'


const scaleName = {
  c: 'Celsius',
  f: 'Farengeit'
}

class TemperatureInut extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.move = this.move.bind(this)
  }

  handleChange(event) {
    this.props.onTemperatureChange(event.target.value)
  }

  move(event) {
    event.target.focus()
  }

  render() {
    return (
      <fieldset className="container">
        <legend>Input temperature in celsius degree {scaleName[this.props.scale]}</legend>
        <input className="form-control col-2" value={this.props.temperature} onChange={this.handleChange} onMouseMove={this.move} />
      </fieldset>
    )
  }
}

export default TemperatureInut
