import React from 'react'

const Product = props => (
  <tr style={Number(props.price) <= Number(props.maxPrice) ?
    { backgroundColor: 'rgba(57, 255, 20, 0.5)' } :
    { backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>
    <th scope="row">{props.i + 1}</th>
    <td>{props.name}</td>
    <td>{props.price}</td>
    <td><button onClick={props.handleDelete} className='btn btn-outline-danger btn-sm'>Delete</button></td>
  </tr>
)

export default Product


