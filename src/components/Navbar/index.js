import React from 'react'  
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { ImgLogo, Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <Link to="/" offset={-80}><NavLogo><ImgLogo src={require(`../../images/marca-png.png`)}/></NavLogo></Link>
                <MobileIcon onClick={toggle}>
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
                    <NavLinks to="design">Diseño</NavLinks>
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