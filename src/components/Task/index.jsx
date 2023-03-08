// Scoped Styles
import './Task.css'

//External plugins
import { MdDoneAll, MdCancel } from 'react-icons/md'

const Task = ({ task, theme, completeTask, removeTask }) => {

  const handleComplete = (e) => {
    e.preventDefault()
    completeTask(task.id)
  }

  const handleRemove = (e) => {
    e.preventDefault()
    removeTask(task.id)
  }

  return (
    <div className={`box-task-container box-task-container-${theme()}`}>
      <div className='box-task'>
        <div
          className={
            `box-task-title box-task-title-${theme()} 
            ${task.completed ? 'line-through' : ''}`
          }
        >
          {task.title}
        </div>
        <div className={`${task.completed ? 'line-through' : ''}`}>{task.description}</div>
      </div>
      <div className='box-task-action'>
        <button
          className={`box-task-btn box-task-btn-completed-${theme()}`}
          onClick={handleComplete}
        >
          <MdDoneAll size={24} />
        </button>
        <button
          className={`box-task-btn box-task-btn-remove-${theme()}`}
          onClick={handleRemove}
        >
          <MdCancel size={24} />
        </button>
      </div>
    </div>
  )
}
export default Task
