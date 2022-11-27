import React from 'react'
import Sidebar from '../components/Sidebar'
import { NavbarS } from '../components/Navbar'
import { useState } from 'react'
import VideoLoop from '../components/VideoLoop'
import { AboutSection, AboutSection1, AboutSection2 } from '../components/AboutSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/AboutSection/Data'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <NavbarS toggle={toggle}/>
        <VideoLoop />
        <AboutSection {...homeObjOne}/>
        <AboutSection1 {...homeObjTwo}/>
        <AboutSection {...homeObjThree}/>
        <AboutSection2 {...homeObjFour}/>
        <Footer />
    </>
  )
}

export default Home