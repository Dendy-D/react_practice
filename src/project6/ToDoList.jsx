import React, { Component } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

class ToDoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      toDoToShow: 'all',
    }

  }

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          return {
            ...todo,
            complete: !todo.complete,
          }
        } else {
          return todo
        }
      })
    })
  }

  updateToDoToShow = str => {
    this.setState({
      toDoToShow: str,
    })
  }

  handleDelete = (id, event) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
    if (event !== undefined) event.preventDefault()
  }

  allTodos = []

  render() {

    if (this.state.toDoToShow === 'all') {
      this.allTodos = this.state.todos
    } else if (this.state.toDoToShow === 'active') {
      this.allTodos = this.state.todos.filter(todo => !todo.complete)
    } else if (this.state.toDoToShow === 'complete') {
      this.allTodos = this.state.todos.filter(todo => todo.complete)
    }

    return (
      <div className='container'>
        <div className='row m-4'>
          <ToDoForm onSubmit={this.addTodo} />
          {this.allTodos.map(todo => (
            <ToDo
              key={todo.id}
              text={todo.text}
              complete={todo.complete}
              toggleComplete={() => this.toggleComplete(todo.id)}
              handleDelete={() => this.handleDelete(todo.id)}
            />
          ))}
          <div className='col-12 m-3'>todos left: {this.state.todos.filter(todo => !todo.complete).length}</div>
          <div>
            <button onClick={() => this.updateToDoToShow('all')} className='btn btn-outline-warning btn-sm'>all</button>
            <button onClick={() => this.updateToDoToShow('active')} className='btn btn-outline-warning btn-sm'>active</button>
            <button onClick={() => this.updateToDoToShow('complete')} className='btn btn-outline-warning btn-sm'>complete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoList