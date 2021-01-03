import React from 'react'

function Warning(props) {
  if (!props.warn) return null

  return (
    <div  className='warning'>
      Warning!
    </div>
  )
}

export default Warning
