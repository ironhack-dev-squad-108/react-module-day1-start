import React, { Component } from "react";

// Definition of the Card component. To use it: <Card />
class Card extends Component {
  render() {
    let text = 'Default text'
    if (this.props.text) {
      text = this.props.text
    }
    return (
      <div className="card">
        <h2>{this.props.title}</h2>
        <p>{text}</p> 
        <p>My dice is {1+Math.floor(6*Math.random())}</p>
        {/* <hr/>
        <ul>
        {this.props.vegetables && this.props.vegetables.map(vegetable => <li>{vegetable}</li>)}
        </ul> */}
      </div>
    )
  }
}

// function Card ({text,title}) {
//   return (
//     <div className="card">
//       <h2>{title}</h2>
//       <p>{text || 'Default text'}</p> 
//     </div>
//   )
// }
// function Card (props) {
//   return (
//     <div className="card">
//       <h2>{props.title}</h2>
//       <p>{props.text || 'Default text'}</p> 
//     </div>
//   )
// }

export default Card
// To import the Card in ohter files, we can do:
// import Card from './Card.jsx'