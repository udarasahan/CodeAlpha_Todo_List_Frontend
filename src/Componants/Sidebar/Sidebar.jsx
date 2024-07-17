import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { useRef } from 'react';

const Sidebar = () => {
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.left = "0";
    };

    const closeMenu = () => {
        menuRef.current.style.left = "-350px";
    };

    return (
        <div className='sidebar'>
            <img src={assets.menuIcon} onClick={openMenu} className='nav-mob-open' alt="Open Menu" />
            <div ref={menuRef} className='nav-menu'>
                <img src={assets.closeIcon} onClick={closeMenu} className='nav-mob-close' alt="Close Menu" />
                <div className="sidebar-options">
                    <NavLink to='/add' className="sidebar-option">
                        <div className='add-task-button'>
                            <p>Add Task</p>
                            <img src={assets.add} alt="Add" />
                        </div>
                    </NavLink>
                    <div className="menu-items">
                        <NavLink to='/home' className={({ isActive }) => isActive ? "sidebar-option active" : "sidebar-option"}>
                            <img src={assets.homeIcon} alt="Home" />
                            <p>Home</p>
                        </NavLink>
                        <NavLink to='/dashboard' className={({ isActive }) => isActive ? "sidebar-option active" : "sidebar-option"}>
                            <img src={assets.dashboard} alt="Dashboard" />
                            <p>Dashboard</p>
                        </NavLink>
                        <NavLink to='/today' className={({ isActive }) => isActive ? "sidebar-option active" : "sidebar-option"}>
                            <img src={assets.today} alt="Today" />
                            <p>Today</p>
                        </NavLink>
                        <NavLink to='/upcoming' className={({ isActive }) => isActive ? "sidebar-option active" : "sidebar-option"}>
                            <img src={assets.upcoming} alt="Upcoming" />
                            <p>Upcoming</p>
                        </NavLink>
                        <NavLink to='/calendar' className={({ isActive }) => isActive ? "sidebar-option active" : "sidebar-option"}>
                            <img src={assets.calendar} alt="Calendar" />
                            <p>Calendar</p>
                        </NavLink>
                    </div>
                    <div className="animation">
                        <img src={assets.deadlineAnimation} alt="Animation" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
