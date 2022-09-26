import React from 'react'
import { TaskContext } from '../TaskContext'
import "./TaskSearch.css"

export const TaskSearch = () => {

  const {searchValue, setSearchValue} = React.useContext(TaskContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <div className='SearchContainer'>
    <input 
    
      className='TaskSearch' 
      placeholder="Search..."
      value={searchValue}
      onChange={onSearchValueChange}
    
    
    />
    </div>
  )
}
