import React from "react";
import { TaskCounter } from '../TaskCounter/Index';
import { TaskList } from '../TaskList/Index';
import { TaskSearch } from '../TaskSearch/Index';
import { CreateTaskButton } from '../CreateTaskButton/Index';
import { TaskItem } from '../TaskItem/Index';
import { TaskContext } from "../TaskContext";
import { Modal } from "../Modal";
import { TaskForm } from "../TaskForm";

const AppUI = () => {

const {searchedTasks, completeTask, deleteTask, modal, setModal} = React.useContext(TaskContext);

  return (
    <React.Fragment>
   <TaskCounter/>
   <TaskSearch/>
       
     <TaskList>
     {searchedTasks.map(task => (
      (<TaskItem 
        key={task.text} 
        text={task.text} 
        completed={task.completed}
        onComplete={() => {completeTask(task.text)}}
        onDelete={()=>{deleteTask(task.text)}} 
        />)))}
    </TaskList>
    {!!modal && (
        <Modal>
          <TaskForm />
        </Modal>
      )}
   <CreateTaskButton 
   setModal = {setModal}
   />
     </React.Fragment>
  )
}

export {AppUI}