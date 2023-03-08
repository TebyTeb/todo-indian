// Scoped Styles
import './TaskContainer.css'

// Hooks
import { useState } from 'react'

// Helpers
import { generateId } from '../helpers'

// Components
import Task from '../Task'

const TaskContainer = ({ tasks, setTasks, theme }) => {

  const [todo, setTodo] = useState({ completed: false, title: '', description: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    if ([todo.title, todo.description].includes('')) {
      console.warn('Title and description are required!')
      return
    }

    // Creating object for handling
    const newTask = todo

    // Assigning unique id
    newTask.id = generateId()

    // Setting new task into tasks array
    setTasks([...tasks, newTask])

    // Cleaning form
    setTodo({ completed: false, title: '', description: '' })
  }

  const completeTask = (idx) => {
    
    const modifiedTask = tasks.filter(task => task.id === idx)[0]
    modifiedTask.completed = !modifiedTask.completed
    
    const updatedTasks = tasks.map(currTask => currTask.id === idx ? modifiedTask : currTask)

    setTasks(updatedTasks)

  }

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value })
  }

  return (
    <div className='tasks-container'>
      <form
        className='input-form'
        action='handleSubmit'
        onSubmit={handleSubmit}
      >
        <input
          className='task-input'
          type='text'
          name='title'
          value={todo.title}
          placeholder='Enter Title'
          onChange={handleChange}
        />
        <input
          className='task-input'
          type='text'
          name='description'
          value={todo.description}
          placeholder='Enter Description'
          onChange={handleChange}
        />

        <button className={`add-btn add-btn-${theme()}`} type='submit'>
          Add
        </button>
      </form>

      <div className="box-tasks-container">
        {tasks?.map(task => (
          <Task 
            key={task.id}
            task={task}
            theme={theme}
            completeTask={completeTask}
          />
        ))}
      </div>
    </div>
  )
}
export default TaskContainer
