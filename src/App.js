import './App.css';
import React from 'react'
import { TaskCounter } from './TaskCounter';
import { TaskList } from './TaskList';
import { TaskSearch } from './TaskSearch';
import { CreateTaskButton } from './CreateTaskButton';
import { TaskItem } from './TaskItem';

const tasks = [
  {text: "1 tarea", completed: true },
  {text: "2 tarea", completed: false },
  {text: "3 tarea", completed: false },
]
 




function App() {
  return ( <React.Fragment>
   <TaskCounter/>
   <TaskSearch />
   <TaskList>
     {tasks.map(task => (
      (<TaskItem 
        key={task.text} 
        text={task.text} 
        completed={task.completed}
        />)
     ))}
   </TaskList>
   <CreateTaskButton />
     </React.Fragment>
  );
  
}

export default App;
