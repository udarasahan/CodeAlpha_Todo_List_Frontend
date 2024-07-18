import './Calender.css';
import Calendar from 'react-calendar';
import { useState } from 'react';

const Calender = () => {

  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className='calender'>
      <h1>Calendar</h1>
      <div className="calendar-container">
      <Calendar
        onChange={onChange}
        value={date}
        className="react-calendar"
      />
    </div>
    </div>
  )
}

export default Calender