import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/index';
import Contact from './pages/contact';


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="contacto" element={<Contact />}/>
        </Routes>
    </Router>
  )
}

export default App