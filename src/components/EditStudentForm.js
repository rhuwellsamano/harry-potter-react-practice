import React, { Component } from 'react';

class EditStudentForm extends Component {

  state = {
    userInput: ''
  }

  onChangeHandler = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  onSubmitHandler = (event) => {
    this.props.handleClickedToggle(event, this.state.userInput)
  }


  render(){
    return (
      <div id="character-card">
          <input type="text" placeholder={this.props.student.name} value={this.state.userInput} onChange={this.onChangeHandler}/>
          <button onClick={this.onSubmitHandler}>Submit</button>
      </div>
    )
  }
}

export default EditStudentForm;
