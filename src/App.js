import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import AboutSection from './components/AboutSection';
import Services from './components/Servicios.js';


const App = () => {
  return (
    <Router>
        <Home />
    </Router>
  )
}

export default App