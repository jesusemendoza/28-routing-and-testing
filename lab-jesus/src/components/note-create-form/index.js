import React from 'react';
import NoteItem from '../note-item/index'
//everything else that creates the form and stuff that handles the submit and change, constructor title
//binding handles and the render
class NoteCreateForm extends React.Component{

  //leave in
  constructor(props){
    super(props);// Vinicio - we HAVE to call this super()
    
    //----------------------------------------------------
  }
  //------------------------------------------------------
  // Member Function
  //------------------------------------------------------
  //2
  
  //2
///1
  render(){
    return(
      <div>
      <NoteItem 
      handleAddExpense={this.props.handleAddExpense}
      handleDeleteNote={this.props.handleDeleteNote}/>
      </div>
    )
  }
  
  //1------------------------------------------------------
  // Lifecycle hooks
  //------------------------------------------------------
  
};

export default NoteCreateForm;