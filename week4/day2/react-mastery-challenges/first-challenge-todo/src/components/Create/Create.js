import React, {Component} from 'react';


export default class extends Component {
 constructor(){
     super();
     this.state={
         userInput: ''
     }
     this.handleChange=this.handleChange.bind(this);
     this.clearMyInput=this.clearMyInput.bind(this);
     this.takeInputAndClear=this.takeInputAndClear.bind(this)
    
 }


handleChange(e){
this.setState({
     userInput: e.target.value
})

}

clearMyInput(){
    this.setState({
        userInput:''
    })
}

takeInputAndClear(state){
    if (this.state.userInput == '' || this.state.userInput==' '){
        return alert('please enter valid characters to make todo item')
    }
    
    else{
    this.props.retrieveInput(this.state.userInput);
    this.clearMyInput();
    console.log('the on click worked')
    }
}



render(){
      
        return(
            <div>
                <h3> Add a new ToDo:</h3>
                <input value = {this.state.userInput} type="text" onChange={this.handleChange} />
                <button id="createNewItem" onClick={()=>this.takeInputAndClear(this.state.userInput)}>Click Me</button>
            </div>
        );
    }
}


