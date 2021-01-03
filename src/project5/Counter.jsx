import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.counter.value,
      id: this.props.counter.id
    }
  }

  formatCount() {
    const { value } = this.state
    return value === 0 ? 'Zero' : value
  }

  handleIncrement() {
    this.setState({
      value: this.state.value + 1
    })
  }

  render() {
    console.log('props', this.props)

    return (
      <div className='container m-3'>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className='btn btn-outline-primary btn-sm'>Increment</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-outline-danger btn-sm ml-4'>Delete</button>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-'
    classes += this.state.value === 0 ? 'warning' : 'primary'
    return classes
  }
}

export default Counter
