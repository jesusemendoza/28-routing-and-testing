import React from 'react';
import ExpenseForm from '../note-create-form/index';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };
    //----------------------------------------------------
    // Binding Handlers
    //----------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    //----------------------------------------------------
  }
  //------------------------------------------------------
  // Member Function
  //------------------------------------------------------
  handleAddExpense(expense){
    expense.createdOn = new Date();
    expense.id = Math.random();

    this.setState(previousState => {
      {console.log(previousState.note)}
      return {notes :[...previousState.notes,expense]};
    });
  }

  //add delete stuff here
  //------------------------------------------------------
  // Hooks
  //------------------------------------------------------

  
  render(){
    return(
      <div>
        <h1>To-Do List</h1>
        <ExpenseForm handleAddExpense={this.handleAddExpense}/>
        <ul>
          {
            this.state.notes.map((expense,index) =>
            <div key={index}>
              <li>{expense.name}</li>
              <p>{expense.description}</p>
              <button >Delete</button>
            </div>  
            )
          }
        </ul>
      </div>
    );

  }
}

export default Dashboard;