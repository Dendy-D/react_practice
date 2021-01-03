import React, { Component } from 'react'
import Warning from './Warning'

export class Page extends Component {

  constructor(props) {
    super(props)

    this.state = {
      warn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      warn: !this.state.warn
    })
  }

  render() {
    return (
      <div>
        <Warning warn={this.state.warn} />
        <button onClick={this.handleClick} className='btn btn-primary'>
          {this.state.warn ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

export default Page
