import React, { Component } from 'react'
import FormWorker from './project8/FormWorker'
import TableWorker from './project8/TableWorker'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      workers: [],
    }
  }

  handleAdd = (worker) => {
    this.setState({
      workers: [...this.state.workers, worker],
    })
  }

  handleDelete = (id) => {
    this.setState({
      workers: this.state.workers.filter((worker) => worker.id !== id),
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='row mb-4'>
          <div className='col-12'>
            <h1>React Tutorial</h1>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12'>
            <p>Add a character with a name and a job to the table.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <TableWorker
              handleDelete={this.handleDelete}
              workers={this.state.workers}
            />
          </div>
        </div>
        <FormWorker workers={this.state.workers} onSubmit={this.handleAdd} />
      </div>
    )
  }
}

export default App
