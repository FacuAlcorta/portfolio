import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './pages/index';
import Contact from './pages/contact';
import Servicios from './pages/services';


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="contacto" element={<Contact />}/>
            <Route path="services" element={<Servicios />}/>
        </Routes>
    </Router>
  )
}

export default App