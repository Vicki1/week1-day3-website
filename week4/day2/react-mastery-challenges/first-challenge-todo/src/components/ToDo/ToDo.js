import React, {Component} from 'react';

export default class extends Component {
   
render(){
       
        return(
            <div>
                <ul className="itemsPending">
               <h4>To Do</h4>
               {
                this.props.toDo.map((toDo, i) => {
                            console.log('happy')
                            return <li key={i}>{toDo}</li>
               })

               }
                  
                   
        
               
              
           
                    
                </ul>
                  
            </div>
        )
    }
}