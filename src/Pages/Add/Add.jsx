import { useEffect, useState } from 'react';
import './Add.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Add = () => {

  const url = "http://localhost:4000";
  const [data, setData] = useState({
    title: "",
    description: "",
    date: "",
    time: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const task = {
      title: data.title,
      description: data.description,
      date: data.date,
      time: data.time
    };

    try {
      const response = await axios.post(`${url}/api/task/add`, task);
      if (response.data.success) {
        setData({
          title: "",
          description: "",
          date: "",
          time: ""
        });
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <div className='add'>
      <h1>Add a new task</h1>
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-task-title">
          <p>Task Title</p>
          <input onChange={onChangeHandler} value={data.title} type="text" name='title' placeholder='Add task title' required />
        </div>
        <div className="add-description">
          <p>Description</p>
          <textarea onChange={onChangeHandler} value={data.description} type="text" name='description' placeholder='Add description' required />
        </div>
        <div className="add-date">
          <p>Date</p>
          <input onChange={onChangeHandler} value={data.date} name='date' type="date" required />
        </div>
        <div className="add-time">
          <p>Time</p>
          <input onChange={onChangeHandler} value={data.time} name='time' type="time" required />
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add;
