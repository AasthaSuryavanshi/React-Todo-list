import React from 'react'
import { useContext } from 'react'
import { dataHolder } from '../context/DataContext'


function Header() {

  const {tasks,settasks} = useContext(dataHolder)
  return (
    <div className='1st w-[35vw] py-6 px-[8vh] border-[1px] border-orange-600 rounded-[30px] flex items-center justify-between '>
    <h1 className=' text-white font-bold text-[6vh] leading-[6.5vh]'>TO-DO <br /> Tasks</h1>

    <div className='circle w-[12vw] h-[12vw] bg-orange-600 rounded-full flex items-center justify-center'>
      <h1 className=' text-black font-extrabold text-[6vh] -translate-y-4'>{tasks.filter((t) => t.completed === true).length}</h1>
      <h1 className=' text-black font-extrabold text-[6vh]'>/</h1>
      <h1 className=' text-black font-extrabold text-[6vh] translate-y-4'>{tasks.length}</h1>
    </div>
  </div>
    )
}

export default Header