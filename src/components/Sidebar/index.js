import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrapper, SidebarRoute } from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about">
              About
            </SidebarLink>
            <SidebarLink to="skills">
              Skills
            </SidebarLink>
            <SidebarLink to="portfolio">
              Portfolio
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrapper>
            <SidebarRoute to="contacto">
              Contacto
            </SidebarRoute>
          </SidebarBtnWrapper>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar