import React, {Component} from 'react';

export default class extends Component {
     constructor(){
     super();
     this.state={
         completed: [],
     }
 }
    render(){
        return(
            <div>
                Completed!
            </div>
        )
    }
}