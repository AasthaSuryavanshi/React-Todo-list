import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";


function ShowTodos(props) {
    const tasks = props.tasks
    const settasks = props.settasks


    const completeHandler = (index) => {
        console.log(tasks)
        const copyTasks = [...tasks]
        copyTasks[index].completed = !copyTasks[index].completed
        settasks(copyTasks);
        localStorage.setItem("tasks",JSON.stringify(copyTasks));
        console.log(tasks);
    
      }
    
      const deleteHandler = (id) => {
        settasks(tasks.filter((t) => t.id != id))
        localStorage.setItem("tasks",JSON.stringify(tasks.filter((t) => t.id != id)))
      }

  return (
<div className='3rd w-[35vw] mt-2 h-[44.8vh] rounded-[30px] flex items-center justify-start flex-col gap-2 overflow-y-auto'>

{tasks.length > 0 ? (
  tasks.map((task, index) => {
    return (

      <div key = {task.id}  className='tasks w-full h-[8vh] border-[1px] border-orange-500 rounded-full flex items-center justify-between px-6 flex-shrink-0'>
        {task.completed ? 
          < FaCircleCheck onClick={() => completeHandler(index)} className='text-green-600'/>
          : 
          < RiCheckboxBlankCircleLine onClick={() => completeHandler(index)} className='text-white'/>
        }
        <h1 className={`${task.completed ?  " line-through " : ""}text-white font-medium -ml-[48vh] text-[2.5vh]`}>{task.title}</h1>
        <  IoMdClose onClick={() => deleteHandler(task.id)} className='text-orange-500 font-extrabold text-[2.7vh]'/>
      </div>

    )
  })) : ( 
    <h1 className='mt-10 w-full text-center text-orange-600 text-3xl'>No tasks pending</h1>
  )
}



</div>

)
}

export default ShowTodos