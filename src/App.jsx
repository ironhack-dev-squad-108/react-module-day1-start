import React, { Component } from "react";
import Card from "./Card.jsx";
import "./App.css";

class App extends Component {
  // render method
  render() {
    // return ['a','b',42];
    let dice = 1+Math.floor(6*Math.random())
    let possibleGreetings = ['Hello','Hallo','Hola','Ola','Bonjour']
    let greetings = possibleGreetings[Math.floor(Math.random()*possibleGreetings.length)]
    return (
      <div className="App">
        <h1> {greetings} Berlin! </h1>
        <p>My name is Maxence and my dice is {dice}</p>
        {/* render the Card, and define this.props.title = "Card 1" */}
        <Card title={"Card 1"} text="This is a test in class" vegetables={[]} /> 
        <Card title="Card 2" vegetables={["carrots","tomatoes","eggplants"]}  />
      </div>
    );
  }
}



export default App;
