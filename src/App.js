import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/index';
import Contact from './pages/contact';
import Servicios from './pages/services';
import ErrorPage from './components/ErrorPage/ErrorPageElements';


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="contacto" element={<Contact />}/>
            <Route path="services" element={<Servicios />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    </Router>
  )
}

export default App