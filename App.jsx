import React from 'react'
import TodoItems from './TodoItems'

const App = ({tasks,remove}) => {
  return (
    <div>
        {tasks.map((task,index)=>(
            <TodoItems task={task} index={index} remove={remove} key={index}/>
        ))}
    </div>
  )
}

export default App
