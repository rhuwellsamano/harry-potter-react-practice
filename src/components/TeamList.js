import React from 'react';
import CardContainer from './StudentCardContainer'

const TeamList = (props) => {

  let arrayOfStudentContainers = props.teamStudents.map( student => <CardContainer key={student._id} student={student} handleToggle={props.handleToggle} handleSubmit={props.handleSubmit}/>)

  return (
    <div id="team-list">
      <h2>My Wizarding Team</h2>
      {arrayOfStudentContainers}
    </div>
  )
}

export default TeamList;
