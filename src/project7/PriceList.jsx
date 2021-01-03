import React, { Component } from 'react'
import PriceForm from './PriceForm'
import Product from './Product'

export class PriceList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chapter: 'Main Component',
      products: []
    }
  }

  addNew = product => {
    if (!isNaN(product.price) && isNaN(product.name)) {
      this.setState({
        products: [product, ...this.state.products]
      })
    } else {
      alert(`Price must be Number____Name must be String`)
    }
  }

  handleDelete = (key) => {
    this.setState({
      products: this.state.products.filter(product => product.key !== key)
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>Price List __ {this.state.chapter}</h1>
          </div>
        </div>
        <PriceForm onSubmit={this.addNew} />
        <table className="table mt-5 col-8">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price($)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(product =>
              <Product
                key={product.key}
                name={product.name}
                price={product.price}
                i={this.state.products.indexOf(product)}
                handleDelete={() => this.handleDelete(product.key)}
                maxPrice={product.maxPrice}
              />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PriceList
