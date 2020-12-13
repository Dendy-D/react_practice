import React, { Component } from 'react'

class EventBind extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      message: 'my name is Huy',
    }

    this.changeName = this.changeName.bind(this)
  }

  changeName() {
    console.log(this)
    this.setState({message: 'sosiiiii'})
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.message}</h1>
        {/* <button onClick={this.changeName.bind(this)}>Click me</button> */}
        <button onClick={this.changeName}>Click me</button>
      </div>
    )
  }
}

export default EventBind
