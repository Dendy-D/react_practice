import React, { Component } from 'react'

// const obj = {
//   name: 'John',
//   surname: 'Smith',
//   job: 'False'
// }

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'John'
    }
  }

  changeMessage() {
    this.setState({name: 'Alice'})
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button className='button' onClick={() => this.changeMessage()}>Click me</button>
      </div>
    )
  }
}



export default Test
