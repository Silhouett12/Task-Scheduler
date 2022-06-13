import React from 'react';
import { TaskContext } from '../TaskContext';
import "./TaskCounter.css";

export const TaskCounter = () => {
  const {totalTasks, completedTasks} = React.useContext(TaskContext)
  return (
    <h2 className='taskCounterTitle'> Has completado {completedTasks} de {totalTasks} tareas</h2>
  )
}
