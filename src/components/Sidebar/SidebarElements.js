import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: #000;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')}
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-colum: 1fr;
    grid-template-rows: repeat(4, 120px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 80px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #00e379;
        transition: 0.3s ease-in-out;
    }
`

export const SidebarBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #00e379;
    white-space: nowrap;
    padding: 16px 64px;
    color: #000;
    font-size: 30px;
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: 0.2s ease-in-out;

    &:hover{
        transition: all 0.3s ease-in-out;
        background: #fff;
        color: #000;
    }
`