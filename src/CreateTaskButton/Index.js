import React from 'react'
import "./CreateTaskButton.css"
import plus from "./plus.png"

export const CreateTaskButton = (props) => {

  
  const onClickButton = () => {
      props.setModal(prevState => !prevState)
  }


  return (
    <span className='ButtonContainer'>
    <button 
      
      className='TaskButton'
      onClick={onClickButton}
    
    
    >
    <img src={plus} alt="Task button"/>
    </button></span>
  )
}
