import React from 'react'
import "./CreateTaskButton.css"
import plus from "./plus.png"

export const CreateTaskButton = (props) => {

  const onClickButton = (msg) => {
    alert(msg)
  }


  return (
    <span className='ButtonContainer'>
    <button 
      
      className='TaskButton'
      onClick={() => onClickButton("holi")}
    
    
    >
    <img src={plus} alt="Task button"/>
    </button></span>
  )
}
