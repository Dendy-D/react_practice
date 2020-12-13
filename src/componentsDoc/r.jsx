import React, { Component } from 'react';
// import './Overview.css';

// import Project from './Project';

class Overview extends Component {
 constructor() {
  super()
  this.state = {
   itemArray: []
  }
}

createProject() {
 const item = this.state.itemArray;
 item.push(
   <div>
     <h2>Title</h2>
     <p>text</p>
   </div>
 )
 this.setState({itemArray: item})
 //console.log(this.state)
}

render() {
 return (
   <div className="Overview">
     <p>Overview</p>
     <button onClick={this.createProject.bind(this)}>New Project</button>
     {/* <Project /> */}
     <div>
       {this.state.itemArray.map((item, index) => {
         return <div className="box" key={index}>{item}</div>
       })}
     </div>
   </div>
  );
 }
}

export default Overview;