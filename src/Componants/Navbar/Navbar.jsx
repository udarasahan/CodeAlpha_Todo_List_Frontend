import { assets } from '../../assets/assets';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavLink to='/home' className="navbar">
        <div className="logo">
          <img src={assets.logo} alt="" />
        </div>
        <div className="notifications-section">
          <p className='notifications-count'></p>
          <img src={assets.notificationIcon} alt="" />  
        </div>    
    </NavLink>   
  )
}

export default Navbar