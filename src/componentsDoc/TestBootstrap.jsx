import React from 'react'

function TestBootstrap() {
  return (
    <div>
      <div className="container">
        <div className="row my-2">
          <div className="col-2">1</div>
          <div className="col-2">2</div>
          <div className="col-2">3</div>
          <div className="col-2">4</div>
          <div className="col-2">5</div>
          <div className="col-2">6</div>
        </div>
        <div className="row my-5">
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  )
}

export default TestBootstrap
