import React, { Component } from 'react'
import Counter from './Counter'

class Counters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ]
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(counterId) {
    const counters = this.state.counters.filter(elem => elem.id !== counterId)
    this.setState({ counters })
  }

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} counter={counter} onDelete={this.handleDelete} />
        ))}
      </div>
    )
  }
}

export default Counters
