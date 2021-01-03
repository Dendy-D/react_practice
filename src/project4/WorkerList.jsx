import React, { Component } from 'react'
import WorkerForm from './WorkerForm'
import Worker from './Worker'
import AditionalFunctions from './AditionalFunctions'

class WorkerList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'Main Component',
      workers: [],
      selectValue: 'Default'
    }
  }

  len

  addWorker = worker => {
    this.len = this.state.workers.length
    const arrValues = []
    for (let key in worker) {
      if (worker[key] === '') {
        arrValues.push(key)
      }
    }
    if (arrValues.length) {
      alert(`Input ${arrValues.join(', ')} plz`)
    } else {
      this.setState({
        workers: [worker, ...this.state.workers]
      })
    }
  }

  handleDelete = (key, event) => {
    this.setState({
      workers: this.state.workers.filter(worker => worker.key !== key)
    })

    if (event !== undefined) event.preventDefault()
  }

  handleDeleteAll = () => {
    if (window.confirm('Are you sure?') === true) {
      this.setState({
        workers: []
      })
    }
  }

  handleSelectChange = (event) => {
    this.setState({
      selectValue: event.target.value
    })
    if (this.state.selectValue === 'by Name') {
      const sortByName = this.state.workers.sort((a, b) => a.name > b.name ? 1 : -1)
      console.log(this.state.workers.name)
      this.setState({
        workers: sortByName
      })
      console.log(this.state.workers)
    }
    // console.log(this.state.selectValue)
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className="col-12">
            <h1>Worker List _ {this.state.text}</h1>
          </div>
          <div className="col-12">
            <WorkerForm onSubmit={this.addWorker} res={this.state.workers} />
            <div className='row'>
              {this.state.workers.map(worker =>
                <Worker
                  key={worker.key}
                  name={worker.name}
                  surname={worker.surname}
                  position={worker.position}
                  number={worker.number}
                  handleDelete={() => this.handleDelete(worker.key)}
                />
              )}
            </div>
            <AditionalFunctions
              handleDeleteAll={this.handleDeleteAll}
              selectValue={this.state.selectValue}
              handleSelectChange={this.handleSelectChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default WorkerList