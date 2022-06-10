import React from 'react'
import "./TaskSearch.css"

export const TaskSearch = ({searchValue, setSearchValue}) => {

  

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <div className='SearchContainer'>
    <input 
    
      className='TaskSearch' 
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    
    
    />
    </div>
  )
}
