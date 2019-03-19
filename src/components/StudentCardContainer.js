import React, { Component } from 'react';
import Card from './CharacterCard'
import EditStudentForm from './EditStudentForm'

class CardContainer extends Component {

  state = {
    student: this.props.student,
    name: this.props.student.name,
    id: this.props.student._id,
    clicked: true
  }

  handleClickedToggle = (event, userInput) => {
    event.preventDefault()
    this.setState({
      clicked: !this.state.clicked
    })

    this.props.handleSubmit(event, userInput, this.state.id)
    console.log('userInput from Card Container:', userInput)

  }

  render() {
    return (
      <div id="student-container">
        {this.state.clicked === true ?
          <Card
          key={this.state.student._id}
          student={this.state.student}
          handleToggle={this.props.handleToggle}
          handleClickedToggle={this.handleClickedToggle}
          clicked={this.state.clicked}/> :
        <EditStudentForm
        key={this.state.student._id}
        student={this.state.student}
        handleToggle={this.props.handleToggle}
        handleClickedToggle={this.handleClickedToggle}
        handleSubmit={this.props.handleSubmit}
        clicked={this.state.clicked}/>}
      </div>
    )
  }
}

export default CardContainer;
