import React, { Component } from 'react'
import AddThing from './AddThing'

class ShoppingBasket extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className='container'>
        <h1 className='mx-auto' style={{ width: 350 + 'px' }}>Shopping Basket</h1>
        <AddThing />
        
      </div>
    )
  }
}

export default ShoppingBasket


