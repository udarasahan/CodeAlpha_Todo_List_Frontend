import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <div className='add-task-button'>
                    <p>Add Task</p>
                    <img src={assets.add} alt="" />
                </div> 
            </NavLink>
            <NavLink to='/home' className="sidebar-option">
                <img src={assets.homeIcon} alt="" />
                <p>Home</p>
            </NavLink>
            <NavLink to='/dashboard' className="sidebar-option">
                <img src={assets.dashboard} alt="" />
                <p>Dashboard</p>
            </NavLink>
            <NavLink to='/today' className="sidebar-option">
                <img src={assets.today} alt="" />
                <p>Today</p>
            </NavLink>
            <NavLink to='/upcoming' className="sidebar-option">
                <img src={assets.upcoming} alt="" />
                <p>Upcoming</p>
            </NavLink>
            <NavLink to='/calendar' className="sidebar-option">
                <img src={assets.calendar} alt="" />
                <p>Calendar</p>
            </NavLink>
        </div>
        <div className="animation">
            <img src={assets.deadlineAnimation} alt="" />
        </div>
    </div>
  )
}

export default Sidebar