import React, { useState } from 'react'
import Header from './components/Header';
import CreateTasks from './components/CreateTasks';
import ShowTodos from './components/ShowTodos';

function App() {
  const [tasks, settasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )  

  return (
    <div className=' font-[gilroy] w-[100vw] h-[100vh] bg-zinc-800 flex items-center justify-center flex-col gap-3'>
    < Header tasks= {tasks}/>
    < CreateTasks tasks= {tasks} settasks= {settasks}/>
    < ShowTodos  tasks= {tasks} settasks= {settasks}/>    

    </div>
  )
}

export default App