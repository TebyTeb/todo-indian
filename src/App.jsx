// Global Styles
import './App.css'

// Hooks
import { useState } from 'react'

//External plugins
import Switch from 'react-switch'
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs'

function App() {

  const [dark, setDark] = useState(true)

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

      {/* <TaskContainer tasks={tasks} setTasks={setTasks} dark={dark} /> */}
    </div>
  )
}

export default App
