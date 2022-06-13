import React from 'react'
import { TaskContext } from '../TaskContext';
import "./TaskForm.css"

const TaskForm = () => {
const [newTaskValue, setNewTaskValue] = React.useState('');
const {addTask, setModal} = React.useContext(TaskContext)

const onChange = (event) => {
  setNewTaskValue(event.target.value)
};
const onCancel = () => {
  setModal(false);
};
const onSubmit = (event) => {
  event.preventDefault();
  addTask(newTaskValue);
  setModal(false);

};

  return (
    <form onSubmit={onSubmit}>
        <label>Crea tu nueva tarea :D</label>
        <textarea 
        value={newTaskValue}
        onChange ={onChange}
        placeholder='Escribe aqui...'/>
        <div className='TaskForm-buttonContainer'>
            <button 
            type='button'
            onClick={onCancel}
            className='TaskForm-button TaskForm-button-cancel'
            
            >
                Cancelar
            </button>
            <button type='submit'
            className='TaskForm-button TaskForm-button-add'>
                Añadir
            </button>
        </div>
    </form>
  )
}

export {TaskForm}