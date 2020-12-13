import React from 'react'


const obj = {
  name: 'Ivan',
  job: 'False',
}

function TestProps(props) {
  console.log(props)
  return (
    <div>
      <h1><Conch name={obj.name}/> </h1>
    </div>
  )
}

function Conch(props) {
  return (
    <div>
      Hello {props.name}
    </div>
  )
}


export default TestProps
