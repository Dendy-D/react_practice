import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const row = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><button className='btn btn-primary mt-1' onClick={() => props.removeCharacter(index)}>Delete</button></td>
      </tr>
    )
  })
  return (
    <tbody>{row}</tbody>
  )
}


const Table = props => {
  const { characterData, removeCharacter } = props

  return (
    <table className='table'>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}


export default Table