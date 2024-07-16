import { assets } from '../../assets/assets';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavLink to='/home' className="navbar">
        <img src={assets.logo} alt="" />    
    </NavLink>   
  )
}

export default Navbar