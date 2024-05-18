import { createContext, useState } from "react"

export const dataHolder = createContext(null)


function DataContext(props) {

    const [tasks, settasks] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
      )  

      const [title, settitle] = useState("")


  return (
    <dataHolder.Provider value={{tasks, settasks, title, settitle}}>
      {props.children}
    </dataHolder.Provider>
  )
}

export default DataContext