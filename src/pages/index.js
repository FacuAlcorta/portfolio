import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import VideoLoop from '../components/VideoLoop'
import AboutSection from '../components/AboutSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/AboutSection/Data'
import Services from '../components/Servicios.js'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <VideoLoop />
        <AboutSection {...homeObjOne}/>
        <AboutSection {...homeObjTwo}/>
        <Services />
        <AboutSection {...homeObjThree}/>
        <AboutSection {...homeObjFour}/>
        <Footer />
    </>
  )
}

export default Home