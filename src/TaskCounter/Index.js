import React from 'react'
import "./TaskCounter.css"

export const TaskCounter = ({total, completed}) => {
  return (
    <h2 className='taskCounterTitle'> Has completado {completed} de {total} tareas</h2>
  )
}
