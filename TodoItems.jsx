import React from 'react'
import delete_icon from '../assets/img/delete.png'
import empty_icon from '../assets/img/Rectangle.png'

const TodoItems = ({task, index, remove}) => {
  return (
    <div>
        <img src={empty_icon} alt="empty_icon"/>
        <span>{task}</span>
        <img src={delete_icon} alt="delete_icon" onClick={() => remove(index)} style={{cursor:'pointer'}}/>
    </div>
  )
}

export default TodoItems
