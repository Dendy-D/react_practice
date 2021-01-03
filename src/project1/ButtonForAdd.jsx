import React, { Component } from 'react'

class ButtonForAdd extends Component {
  



  render() {
    return (
      <div>
        <button className={this.props.class} onClick={this.props.addThing}> {this.props.buttonName} </button>
      </div>
    )
  }
}

export default ButtonForAdd


//   < Field
// placeholder = { 'Input name thing'}
// className = { 'form-control'}
// type = { 'text'}
//   />

//         <ButtonForAdd class={'btn btn-primary'} buttonName={'Add thing'} onClick={() => this.addThing} />

//         <Field
//           placeholder={'Input price'}
//           className={'form-control'}
//           type={'text'}

