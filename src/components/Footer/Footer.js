import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #696969;

`

export const FooterWrapper = styled.div`
    padding: 30px 34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinkWrap = styled.div`
    display: flex;

    @media and screen (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 25px;
    text-align: left;
    width: 200px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 820px) {
        margin: 0;
        padding: 30px;
        width: 100%;
    }
    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
    `

export const FooterLinkTitle = styled.h1`
    font-size: 30px;
    margin-bottom: 20px;
    text-decoration: underline;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 24px;

    &:hover {
        color: #00ca6b;
        transition: 0.3s ease-in-out;
    }
`

export const SocialMediaContainer = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 10px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const SocialLogo = styled(Link)`
    justify-self: start;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const Img = styled.img`
    width: 180px;

    @media screen and (max-width: 820px) {
        width: 200px;
    }
`

export const Derechos = styled.small`
    color: #fff;
    font-size: 24px;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

    @media screen and (max-width: 820px) {
        width: 340px;
    }
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`