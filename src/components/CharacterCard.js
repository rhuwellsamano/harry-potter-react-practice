import React from 'react';

const CharacterCard = (props) => {


  const toggleHandler = () => {
    props.handleToggle(props.student)
  }

  const editButtonHandler = () => {
    console.log('edit button clicked')

  }

  return (
    <div id="character-card">
      <h6>{props.student.name}</h6>
      <button onClick={toggleHandler}>Toggle</button>
      <button onClick={editButtonHandler} onClick={props.handleClickedToggle}>Edit</button>
    </div>
  )
}

export default CharacterCard;
