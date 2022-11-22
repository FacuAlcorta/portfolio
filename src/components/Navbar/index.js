import React, { useState } from 'react'  
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { ImgLogo, Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = ({toggle}) => {
  
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
        <Nav>
            <NavbarContainer>
                <Link to="/" offset={-80}><NavLogo onClick={toggleHome}><ImgLogo src={require(`../../images/marca-png.png`)}/></NavLogo></Link>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks
                    to="about"
                    smooth={true}
                    duration={350}
                    spy={true}
                    offset={-80}
                    >About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                    to="skills"
                    smooth={true}
                    duration={350}
                    spy={true}
                    offset={-80}
                    >Skills</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                    to="design"
                    smooth={true}
                    duration={350}
                    spy={true}
                    offset={-80}
                    >Diseño</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                    to="portfolio"
                    smooth={true}
                    duration={350}
                    spy={true}
                    offset={-80}
                    >Portfolio</NavLinks>
                  </NavItem>
                </NavMenu>
                  <NavBtn>
                    <NavBtnLink to="/contacto">Contacto</NavBtnLink>
                  </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar