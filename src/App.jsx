import './App.css';
import Navbar from './Componants/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Sidebar from './Componants/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
//import Calendar from 'react-calendar';
import Add from './Pages/Add/Add';
import Today from './Pages/Today/Today';
import Upcoming from './Pages/Upcoming/Upcoming';
import Calender from './Pages/Calendar/Calender';
import Dashboard from './Pages/Dashboard/Dashboard'
import Home from './Pages/Home/Home';
import Footer from './Componants/Footer/Footer';

function App() {

  const url = "http://localhost:5174";

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/home' element={<Home url={url} />} />
          <Route path='/dashboard' element={<Dashboard url={url} />} />
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/today' element={<Today url={url} />} />
          <Route path='/upcoming' element={<Upcoming url={url} />} />
          <Route path='/calendar' element={<Calender url={url} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
