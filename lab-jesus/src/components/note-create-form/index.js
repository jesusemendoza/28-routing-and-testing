import React from 'react';
//everything else that creates the form and stuff that handles the submit and change, constructor title
//binding handles and the render
class NoteCreateForm extends React.Component{

  //leave in
  constructor(props){
    super(props);// Vinicio - we HAVE to call this super()
    this.state = {
      name : '',
      description : 0,
      //completed:false
      //editing:false
    };
    //----------------------------------------------------
    // Binding Handlers
    //----------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(NoteCreateForm.prototype);
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
  handleSubmit(event){
    event.preventDefault();
    //** change handle add expense to handle submit
    this.props.handleAddExpense(this.state);
    // vinicio - clearing the form
    this.setState({
      name : '',
      description : 0,
      //completed
      //editing
    });
  }

  handleChange(event){
    let {name,value} = event.target;
    // vinicio - name will be the name of the input we are working with

    this.setState({
      [name]: value,
    });
  }

  //------------------------------------------------------
  // Lifecycle hooks
  //------------------------------------------------------
  render(){
    return(
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}  
        />
        <input
          type='text'
          name='description'
          placeholder='description'
          value={this.state.description}
          onChange={this.handleChange}  
        />
        <button type='submit'>Create to-do</button>
      </form>
    );
  }
};

export default NoteCreateForm;