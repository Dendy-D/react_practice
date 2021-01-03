import React from 'react'

const todo = props => (
  <div className='col-12 row m-3'>
    <div className="row">
      <div
        style={{ textDecoration: props.complete ? 'line-through' : '', cursor: 'pointer' }}
        onClick={props.toggleComplete}
        className='col m-3'
      >
        {props.text}
      </div>
      <div className='col m-3'>
        <button onClick={props.handleDelete} className='btn btn-outline-danger btn-sm'>Delete</button>
      </div>
    </div>
  </div>
)

export default todo