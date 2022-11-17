import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrapper, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="skills" onClick={toggle}>
              Skills
            </SidebarLink>
            <SidebarLink to="portfolio" onClick={toggle}>
              Portfolio
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrapper>
            <SidebarRoute to="contacto" onClick={toggle}>
              Contacto
            </SidebarRoute>
          </SidebarBtnWrapper>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar