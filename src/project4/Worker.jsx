import React from 'react'

const Worker = props => (
  <div className='col-3 m-5' style={{ border: '2px solid black' }}>
    <div className="col-12 m-2" style={{textAlign: 'center', fontSize: '20px'}}>
      <span>Worker__{[...props.number].slice(4)}</span>
    </div>
    <div className="col-12 m-2">
      <span>Name:</span> {props.name}
    </div>
    <div className="col-12 m-2">
      <span>Surname:</span> {props.surname}
    </div>
    <div className="col-12 m-2">
      <span>Position:</span> {props.position}
    </div>
    <div className='col-12 m-2'>
      <button onClick={props.handleDelete} className='btn btn-outline-danger btn-sm'>Delete</button>
    </div>
  </div>
)

export default Worker
