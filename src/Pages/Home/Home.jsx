import { useEffect, useState } from 'react';
import './Home.css';
import { assets } from '../../assets/assets';
import { Box } from '@mui/material';


const Home = () => {

  var [date,setDate] = useState(new Date());
  // For Show the Date and Time
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
        clearInterval(timer)
    }

  }, []);

  return (
    <div className='home'>
        <div className="home-upper">
            <div className="date-and-time-display"> 
                <p className='time-display'>{date.toLocaleTimeString()}</p>
                <p className='date-display'>{date.toLocaleDateString()}</p>
            </div>
        </div>
        <div className="home-center">
            <img src={assets.runningBoy} alt="" />
            <p>Enchantment and Comfort for Your Busy Days...!</p>
        </div>
        <div className="details-display">
            <Box className="detail-display" sx={{backgroundColor: '#F7F944'}}>
                <p>Tasks Completed</p>
                <p>8</p>
            </Box>
            <Box className="detail-display" sx={{backgroundColor: '#C467C8'}}>
                <p>Pending Tasks</p>
                <p>4</p>
            </Box>
            <Box className="detail-display" sx={{backgroundColor: '#DF2DAA'}}>
                <p>Total Tasks</p>
                <p>12</p>
            </Box>
            <Box className="detail-display" sx={{backgroundColor: '#7E4FEA'}}>
                <p>Productivity Score</p>
                <p>66.6%</p>
            </Box>
        </div>
    </div>
  )
}

export default Home