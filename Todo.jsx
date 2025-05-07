import React, { useState } from 'react'
import plus_icon from '../assets/img/plus.png'


const Todo = () => {
    const [tasks, setTask] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
    const InputChange = (e) => {
        setInputValue(e.target.value);
    };

    const AddTask = () => {
        if (inputValue.trim()){
        setTask([...tasks, inputValue]);
        setInputValue('');
        }
    };

    const RemoveTask = (index) => {
        const newTask = [...tasks];
        newTask.splice(index, 1);
        setTask(newTask);
    }

  return (
    <div>
        <input type="text" placeholder="오늘 할 일을 입력해주세요!" value={inputValue} onChange={InputChange} />
        <img src={plus_icon} alt="plus_icon" onClick={AddTask} style={{cursor:'pointer'}}/>
        <Todo tasks={tasks} RemoveTask={RemoveTask}/>
    </div> 
  )
}

export default Todo
