import React from 'react';
import NoteCreateForm from '../note-create-form/index';

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
    console.log(memberFunctions)
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    console.log('after',memberFunctions)
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

  handleDeleteNote(event){
    event.preventDefault();
    console.log('inside index', this.state);

    // this.setState(previousState => {
    //   return {notes :[...previousState.notes,expense]};
    // });
  }
  



  //add delete stuff here
  //------------------------------------------------------
  // Hooks
  //------------------------------------------------------

  
  render(){
    return(
      <div>
        <h1>To-Do List</h1>
        <NoteCreateForm 
        handleAddExpense={this.handleAddExpense}
        handleDeleteNote={this.handleDeleteNote}/>
        <ul>
          {
            this.state.notes.map((expense,index) =>
            <div key={index}>
              <li>{expense.name}</li>
              <p>{expense.description}</p>
              <button id={index} onClick={this.handleDeleteNote}>Delete</button>
            </div>  
            )
          }
        </ul>
      </div>
    );

  }
}

export default Dashboard;