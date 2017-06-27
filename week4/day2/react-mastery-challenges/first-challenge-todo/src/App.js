import React, { Component } from 'react';
//
import './App.css';
import Create from './components/Create/Create';
import ToDo from './components/ToDo/ToDo';
//import Completed from "./components/Completed/Completed"




class App extends Component {
  constructor(){
    super();
    this.state={
      toDo:['todo list is working', 'hello', 'how are you','i'],
      
      
    }
    this.retrieveInput = this.retrieveInput.bind(this)
  }


  retrieveInput(userInput){
var array= this.state.toDo;
array.push(userInput);
    this.setState({
      toDo: array
    })


  }
  render() {
    return (
      <div className="appComponent">
        <h1>AppComponent</h1>
    
        <div className="toDoZone">
        <Create retrieveInput={this.retrieveInput}/>
          </div>
        <div className='todoBox'>
          <ToDo toDo={this.state.toDo}/>
          </div>

          
      </div>
    );
  }
}

export default App;
