import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = { count: 0 }
  }

  handleCount() {
    this.setState({
      count: this.state + 1
    })
  }

  render() {
    return (
      <button className="btn btn-primary ml-3">ww</button>
    )
  }
}

export default Counter
