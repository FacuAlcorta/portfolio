import React from 'react'  
import { FaBars } from 'react-icons/fa'
import { Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks } from './NavbarElements'

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
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar