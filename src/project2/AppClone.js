import React, { Component } from 'react'
import './App.css'
import Form from './project2/Form'
import Table from './project2/Table'
// import ShoppingBasket from './project1/ShoppingBasket'
// import Calculator from './componentsDoc/Calculator'
// import Button from './componentsDoc/Button'
// import Lists from './componentsDoc/Lists'
// import NameForm from './componentsDoc/NameForm'
// import TestBootstrap from './componentsDoc/TestBootstrap'
// import Comment from './componentsDoc/Comment'
// import TestProps from './componentsDoc/TestProps'
// import Counter from './componentsYouTube/Counter'
// import EventBind from './componentsYouTube/EventBind'
// import ParentComponent from './componentsYouTube/ParentComponent'
// import Test from './componentsYouTube/Test'



class App extends Component {
  state = {
    characters: []
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((elem, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }

  render() {
    return (
      <div className='App.css container'>
        <h1 className='h1 mt-3 mb-3 font-weight-bold'>The list of users</h1>
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App


