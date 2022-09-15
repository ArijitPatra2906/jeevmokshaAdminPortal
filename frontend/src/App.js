import { useContext } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Course from './pages/Course/Course';
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/courseinfo" element={<Course />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
