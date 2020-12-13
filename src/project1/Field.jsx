import React, { Component } from 'react'

class Field extends Component {
  constructor(props) {
    super(props)

    this.state = { value: '' }
    this.focus = this.focus.bind(this)
    this.handlerChange = this.handlerChange.bind(this)
  }

  focus(event) {
    event.target.focus()
  }

  handlerChange(event) {
    this.setState({
      state: event.target.value
    })
  }

  render() {
    return (
      <div className="col-3">
        <input
          type={this.props.type}
          className={this.props.className}
          placeholder={this.props.placeholder}
          onMouseMove={this.focus}
          value={this.state.value}
          onChange={this.handlerChange}
        />
      </div>
    )
  }
}

export default Field
