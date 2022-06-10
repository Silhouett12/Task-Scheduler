import './App.css';
import React from 'react'
import { TaskCounter } from '../TaskCounter/Index';
import { TaskList } from '../TaskList/Index';
import { TaskSearch } from '../TaskSearch/Index';
import { CreateTaskButton } from '../CreateTaskButton/Index';
import { TaskItem } from '../TaskItem/Index';

// CUSTOM REACT HOOK

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItems;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = initialValue;
  } else {
    parsedItems = JSON.parse(localStorageItem);
  }
  const [item, SetItem] = React.useState(parsedItems);

  const saveItem = (newItem) => {
    const strTaks = JSON.stringify(newItem);
    localStorage.setItem(itemName, strTaks);
    SetItem(newItem)
  } 
  return [
    item,
    saveItem
  ];
}
 


function App() {

 const [tasks, saveTask] = useLocalStorage('TASKS_V1', [])
  
  const [searchValue, setSearchValue] = React.useState('');
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


  return ( <React.Fragment>
   <TaskCounter
    total = {totalTasks}
    completed = {completedTasks}
   />
   <TaskSearch 
    searchValue= {searchValue}
    setSearchValue= {setSearchValue}
   
   />
   <TaskList>
     {searchedTasks.map(task => (
      (<TaskItem 
        key={task.text} 
        text={task.text} 
        completed={task.completed}
        onComplete={() => {completeTask(task.text)}}
        onDelete={()=>{deleteTask(task.text)}} 
        />)
     ))}
   </TaskList>
   <CreateTaskButton />
     </React.Fragment>
  );
  
}

export default App;
