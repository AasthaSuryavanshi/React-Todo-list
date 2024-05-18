import React, { useContext, useState } from 'react'
import { nanoid } from 'nanoid'

import { IoMdAdd } from "react-icons/io";
import { dataHolder } from '../context/DataContext';



function CreateTasks() {

  const {tasks,settasks,title,settitle} = useContext(dataHolder)

    
    
    const submitHandler = (e) => {
        e.preventDefault();
        const newTodo = {id: nanoid(), title, completed:false}
        settasks([...tasks, newTodo])
        settitle("")
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTodo]))
      }


  return (
    <div className='2nd w-[35vw] h-[10vh] flex items-center justify-between px-[2vh]'>
        <form onSubmit={submitHandler}>
          <input 
          onChange={ (e) => {settitle(e.target.value)}}
          value={title}          
          type="text" placeholder='Enter your to-dos....' 
          className=' w-[28vw] h-[7vh] px-8 bg-transparent border-[1px] border-white/90 rounded-[30px] text-orange-500 font-medium text-[2.2vh]'/>
        </form>

        <div onClick={submitHandler} className='addIcon bg-orange-600 w-[7vh] h-[7vh] rounded-full flex items-center justify-center'><IoMdAdd className='font-[900] text-[5vh] text-zinc-800'/></div>
      </div>
      
    )
}

export default CreateTasks