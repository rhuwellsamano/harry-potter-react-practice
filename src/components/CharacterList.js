import React from 'react';
import CardContainer from './StudentCardContainer';

const StudentContainer = (props) => {

  let arrayOfStudentContainers = props.allStudents.map(student => <CardContainer key={student._id} student={student} handleToggle={props.handleToggle} handleSubmit={props.handleSubmit}/>)

  return (
    <div id="character-list">
      <h2>Available Students</h2>
      {arrayOfStudentContainers}
    </div>
  )
}

export default StudentContainer;
