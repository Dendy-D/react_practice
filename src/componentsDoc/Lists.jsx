import React from 'react'

const arr = [1, 2, 3, 4, 5]

const createList = arr => arr.map(elem => <li key={elem.toString()}>{elem}</li>)

function ListsItem() {
  return (
    <div>
      <ul>{createList(arr)}</ul>
    </div>
  )
}

export default ListsItem
