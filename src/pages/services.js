import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { NavbarR } from '../components/Navbar'
import Services from '../components/Servicios'
import Footer from '../components/Footer'

const Servicios = () => {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <>
    <NavbarR toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Services />
    <Footer />
    </>
  )
}

export default Servicios