import { useState } from 'react'


const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Please add a task')
      return
    }
    onAdd({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task-label">Task</label>
        <input 
          type="text" 
          placeholder='Add Task' 
          id="task-label"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="task-date">Day & Time</label>
        <input 
          type="text" 
          placeholder='Add Day & Time' 
          id="task-date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="task-reminder">Set Reminder</label>
        <input 
          type="checkbox"
          checked={reminder}
          id="task-reminder"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}  
        />
      </div>

      <input type="submit" value="Save task"  className='btn btn-block'/>
    </form>
  )
}

export default AddTask
