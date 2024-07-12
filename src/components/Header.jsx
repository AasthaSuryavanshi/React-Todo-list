import React from 'react'
import { useContext } from 'react'
import { dataHolder } from '../context/DataContext'


function Header() {

  const {tasks,settasks} = useContext(dataHolder)
  return (
    <div className='1st w-[35vw] py-6 px-[8vh] border-[1px] border-orange-600 rounded-[30px] flex items-center justify-between '>
    <h1 className=' text-white font-bold text-[6vh] leading-[6.5vh]'>TO-DO <br /> Tasks</h1>

    <div className='circle relative w-[12vw] h-[12vw] rounded-full flex items-center justify-center'>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" className='absolute'>
                <defs>
                    <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#EA580C" />
                    <stop offset="50%" stopColor="#fc1b1b" />
                    <stop offset="100%" stopColor="#EA580C" />
                    </linearGradient>
                </defs>
                <circle cx="93" cy="90" r="75" fill="none" stroke="url(#GradientColor)" strokeWidth="20px" strokeLinecap="round" strokeDasharray={472} strokeDashoffset={472-(((tasks.filter((t)=> t.completed === true).length/tasks.length)*100)*4.72)} />
            </svg>
      <h1 className=' text-white font-extrabold text-[6vh] -translate-y-4'>{tasks.filter((t) => t.completed === true).length}</h1>
      <h1 className=' text-white font-extrabold text-[6vh]'>/</h1>
      <h1 className=' text-white font-extrabold text-[6vh] translate-y-4'>{tasks.length}</h1>
    </div>
  </div>
    )
}

export default Header