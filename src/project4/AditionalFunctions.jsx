import React from 'react'

const AditionalFunctions = props => (
  <div className='row mb-5'>
    <div className='mt-4 col-4'>
      <button onClick={props.handleDeleteAll} className='btn btn-outline-danger'>Delete All</button>
    </div>
    <div className='col-3'>
      <label htmlFor="inputState">Sort Workers</label>
      <select
        id="inputState"
        className="form-control"
        onChange={props.handleSelectChange}
        value={props.selectValue}
      >
        <option>Default</option>
        <option>by Name</option>
        <option>by Surname</option>
        <option>by Position</option>
      </select>
    </div>
  </div>
)

export default AditionalFunctions
