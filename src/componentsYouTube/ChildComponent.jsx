import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Green Parent</button>
    </div>
  )
}

export default ChildComponent
