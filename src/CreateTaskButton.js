import React from 'react'
import "./CreateTaskButton.css"
import plus from "./plus.png"

export const CreateTaskButton = () => {
  return (
    <span className='ButtonContainer'><button className='TaskButton'><img src={plus} alt="Task button"/></button></span>
  )
}
