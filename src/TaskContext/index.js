import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TaskContext = React.createContext(); 

const TaskProvider = (props) => {
    const [tasks, saveTask] = useLocalStorage('TASKS_V1', [])
  
    const [searchValue, setSearchValue] = React.useState('');

    const [modal, setModal] = React.useState(false);
    const completedTasks = tasks.filter(task => !!task.completed).length;
    const totalTasks = tasks.length
    
    let searchedTasks= [];
  
    if (!searchValue >= 1) {
      searchedTasks = tasks;
    }
    else {
      searchedTasks = tasks.filter(task => {
        const taskText = task.text.toLowerCase()
        const searchText = searchValue.toLowerCase()
  
        return taskText.includes(searchText)
      })
      
    }
  
  
    const addTask = (text) => {
      const newTasks = [...tasks];
      newTasks.push({
        text,
        completed: false,
    });
      saveTask(newTasks);
     } 
  
   const completeTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = true;
    saveTask(newTasks);
   } 
  
   const deleteTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    saveTask(newTasks);
   } 
  
    
    
    return (
    <TaskContext.Provider value={{
        totalTasks,
        completeTask,
        searchValue ,
        setSearchValue ,
        searchedTasks,
        completedTasks,
        deleteTask,
        modal,
        setModal,
        addTask
    }}>

        {props.children}
    </TaskContext.Provider>)
}



export {TaskContext, TaskProvider
}