import React from 'react'
import "./TaskList.css"


export const TaskList = (props) => {
  return (
    <section>
        <ul className='TaskList'>
            {props.children}
        </ul>
    </section>
  )
}
