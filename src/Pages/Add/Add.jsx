import './Add.css';

const Add = () => {
  return (
    <div className='add'>
      <h1>Add a new task</h1>
      <form className="flex-col">
        <div className="add-task-title">
          <p>Task Title</p>
          <input type="text" name='title' placeholder='Add task title' required />
        </div>
        <div className="add-description">
          <p>Description</p>
          <textarea type="text" name='description' placeholder='Add descrption' required />
        </div>
        <div className="add-date">
          <p>Date</p>
          <input type="date" required />
        </div>
        <div className="add-time">
          <p>Time</p>
          <input type="time" required />
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add