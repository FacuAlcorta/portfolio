import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes,Route, Outlet } from 'react-router-dom';
import Home from './pages/index';
import Contact from './pages/contact';
import Servicios from './pages/services';
import { AboutSection, AboutSection1 } from './components/AboutSection';


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}>
              <Route path=":about" element={<AboutSection />}/>
              <Route path=":skills" element={<AboutSection1 />}/>
              <Route path=":design" element={<AboutSection />}/>
              <Route path=":portfolio" element={<AboutSection />}/>
            </Route>
            <Route path="contacto" element={<Contact />}/>
            <Route path="services" element={<Servicios />}/>
        </Routes>
    </Router>
  )
}

export default App