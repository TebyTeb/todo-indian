// Global Styles
import './App.css'

// Hooks
import { useEffect, useState } from 'react'

//External plugins
import Switch from 'react-switch'
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs'

// Components
import TaskContainer from './components/TaskContainer'

const App = () => {

  // At first render, gathers tasks from localStorage if any, or sets empty array
  const initialTasks = JSON.parse(localStorage.getItem('myTodoTasks')) ?? []

  const [dark, setDark] = useState(true)
  const [tasks, setTasks] = useState(initialTasks)

  // Saves tasks array to localStorage on change
  useEffect(() => {
    localStorage.setItem('myTodoTasks', JSON.stringify(tasks))
  }, [tasks])

  // Theme switcher aux function (avoids ternary mayhem)
  const theme = () => {
    return dark ? 'dark' : 'light'
  }

  return (
    <div className={`app app-${theme()}`}>
      <div className={`app-title-container app-title-container-${theme()}`}>
        <h1 className='app-title'>ToDo App</h1>
      </div>

      <Switch
        checked={dark}
        onChange={() => setDark(!dark)}
        uncheckedIcon={<BsSunFill className='theme-switch' />}
        checkedIcon={<BsFillMoonStarsFill className='theme-switch' />}
      />

      <TaskContainer tasks={tasks} setTasks={setTasks} theme={theme}/>
    </div>
  )
}

export default App
