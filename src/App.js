import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes,Route, Outlet } from 'react-router-dom';
import Home from './pages/index';
import Contact from './pages/contact';
import Servicios from './pages/services';
<<<<<<< HEAD
import { AboutSection, AboutSection1 } from './components/AboutSection';
=======
import { AboutSection, AboutSection1, AboutSection2 } from './components/AboutSection';
>>>>>>> 0287efc (Agregado de flipcard y video en contacto)


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}>
<<<<<<< HEAD
              <Route path=":about" element={<AboutSection />}/>
              <Route path=":skills" element={<AboutSection1 />}/>
              <Route path=":design" element={<AboutSection />}/>
              <Route path=":portfolio" element={<AboutSection />}/>
=======
              <Route path="/:about" element={<AboutSection />}/>
              <Route path="/:skills" element={<AboutSection1 />}/>
              <Route path="/:design" element={<AboutSection />}/>
              <Route path="/:portfolio" element={<AboutSection2 />}/>
>>>>>>> 0287efc (Agregado de flipcard y video en contacto)
            </Route>
            <Route path="contacto" element={<Contact />}/>
            <Route path="services" element={<Servicios />}/>
        </Routes>
    </Router>
  )
}

export default App