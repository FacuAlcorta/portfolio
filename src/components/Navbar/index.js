import React from 'react'  
import { FaBars } from 'react-icons/fa'
import { Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">f@</NavLogo>
                <MobileIcon>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="about">About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="skills">Skills</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="portfolio">Portfolio</NavLinks>
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