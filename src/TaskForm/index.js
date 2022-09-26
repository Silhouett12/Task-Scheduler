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
        <label>Create a task :D</label>
        <textarea 
        value={newTaskValue}
        onChange ={onChange}
        placeholder='Write a task...'/>
        <div className='TaskForm-buttonContainer'>
            <button 
            type='button'
            onClick={onCancel}
            className='TaskForm-button TaskForm-button-cancel'
            
            >
                Cancel
            </button>
            <button type='submit'
            className='TaskForm-button TaskForm-button-add'>
                Add
            </button>
        </div>
    </form>
  )
}

export {TaskForm}