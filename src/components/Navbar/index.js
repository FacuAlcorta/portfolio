import React from 'react'  
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { ImgLogo, Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks, NavLinksR, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'
import { homeObjOne } from '../AboutSection/Data'


export const NavbarS = ({toggle}) => {
  
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
                    duration={450}
                    spy={true}
                    offset={-80}
                    >About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                    to="skills"
                    smooth={true}
                    duration={450}
                    spy={true}
                    offset={-80}
                    >Skills</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                    to="design"
                    smooth={true}
                    duration={450}
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


export const NavbarR = ({toggle}) => {
  
  const toggleHome = () => {
    scroll.scrollToTop(true);
  }

  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLink><NavLogo to="/" offset={-80} onClick={toggleHome}><ImgLogo src={require(`../../images/marca-png.png`)}/></NavLogo></NavLink>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinksR
                    to="/"
                    onClick={()=> window.scrollTo({top: 0, left: 0})}
                    offset={-80}
                    >Home</NavLinksR>
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