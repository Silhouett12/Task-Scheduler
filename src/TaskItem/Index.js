import React from 'react'
import "./TaskItem.css"
import TaskCheck from "./check.png"
import TaskDelete from "./bin.png"


export const TaskItem = (props) => {

  return (
    <li className='TaskItem'>
        <span       
        className='TaskCheck'
        onClick={props.onComplete}
        
        > 
        <img src={TaskCheck} alt="check"/> </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
        
        <span 
        className='TaskDelete'
        onClick={props.onDelete}
        
        >
        
        <img src= {TaskDelete } alt="delete"/>
        </span>
    </li>
  )
}
