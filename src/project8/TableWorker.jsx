import React from 'react'

const TableWorker = (props) => {
  return (
    <table className='table col-8'>
      <thead>
        <tr>
          <th scope='col-1'>#</th>
          <th scope='col-2'>Name</th>
          <th scope='col-2'>Job</th>
          <th scope='col-2'>Remove</th>
        </tr>
      </thead>
      <tbody>
        {props.workers.map((worker) => (
          <tr key={worker.id}>
            <td>{worker.number}</td>
            <td>{worker.name}</td>
            <td>{worker.job}</td>
            <td>
              <button
                onClick={() => props.handleDelete(worker.id)}
                className='btn btn-danger btn-sm'
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableWorker
