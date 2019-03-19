import React, {Component} from 'react';
import './App.css';
import { getGryffindor } from './endpoints'
import CharacterList from './components/CharacterList'
import TeamList from './components/TeamList'

class App extends Component {

  state = {
    allStudents: [],
    teamStudents: []
  }

  componentDidMount(){
    fetch(getGryffindor)
    .then(res => res.json())
    .then(studentsData => this.setState({
          allStudents: studentsData[0].members
        }))
  }

  handleToggleAddToTeam = (studentObj) => {
    this.setState({
      allStudents: [...this.state.allStudents].filter(student => student._id !== studentObj._id),
      teamStudents: [studentObj, ...this.state.teamStudents]
    })
  }

  handleToggleRemoveFromTeam = (studentObj) => {
    this.setState({
      allStudents: [studentObj, ...this.state.allStudents],
      teamStudents: [...this.state.teamStudents].filter(student => student._id !== studentObj._id),
    })
  }


  handleSubmitForCharacterList = (event, userInput, id) => {
    event.preventDefault()

    let copyOfAllStudents = [...this.state.allStudents]
    let studentToUpdate = copyOfAllStudents.find(student => student._id === id)
    studentToUpdate.name = userInput
    this.setState({
      allStudents: copyOfAllStudents
    })
  }



  handleSubmitForTeamList = (event, userInput, id) => {
    event.preventDefault()

    let copyOfTeamStudents = [...this.state.teamStudents]
    let studentToUpdate = copyOfTeamStudents.find(student => student._id === id)

    studentToUpdate.name = userInput
    this.setState({
      teamStudents: copyOfTeamStudents
    })
  }


  render(){
    return (
      <div id="character-container">
        <CharacterList allStudents={this.state.allStudents} handleToggle={this.handleToggleAddToTeam} handleSubmit={this.handleSubmitForCharacterList}/>
        <TeamList teamStudents={this.state.teamStudents} handleToggle={this.handleToggleRemoveFromTeam} handleSubmit={this.handleSubmitForTeamList}/>
      </div>
    )
  }
}

export default App;
