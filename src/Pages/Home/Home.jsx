import { useEffect, useState } from 'react';
import './Home.css';
import { assets } from '../../assets/assets';

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
    </div>
  )
}

export default Home