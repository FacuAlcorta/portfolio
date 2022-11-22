import React from 'react'
import { FooterContainer, FooterWrapper, FooterLinkContainer, FooterLinkWrap, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMediaContainer, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, Derechos, Img } from './Footer'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <>
        <FooterContainer>
            <FooterWrapper>
                <FooterLinkContainer>
                    <FooterLinkWrap>
                        <FooterLinkItems>
                            <FooterLinkTitle>Home</FooterLinkTitle>
                            <FooterLink to="/contacto">Inicio</FooterLink>
                            <FooterLink to="/contacto">Skills</FooterLink>
                             <FooterLink to="/contacto">Diseño</FooterLink>
                             </FooterLinkItems>
                             <FooterLinkItems>
                            <FooterLinkTitle>Sobre mi</FooterLinkTitle>
                            <FooterLink to="/contacto">Bio</FooterLink>
                            <FooterLink to="/contacto">Reseñas</FooterLink>
                             <FooterLink to="/contacto">Contacto</FooterLink>
                             </FooterLinkItems>
                             <FooterLinkItems>
                            <FooterLinkTitle>Redes Sociales.</FooterLinkTitle>
                            <FooterLink href="https://www.facebook.com/facundo.korn.1/" target="_blank" aria-label="Facebook">Facebook</FooterLink>
                            <FooterLink href="https://www.instagram.com/facundoalcorta/" target="_blank" aria-label="Instagram">Instagram</FooterLink>
                             <FooterLink href="https://www.linkedin.com/in/facundo-alcorta-997270220/" target="_blank" aria-label="Linkedin">Linkedin</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrap>
                </FooterLinkContainer>
                <SocialMediaContainer>
                    <SocialMediaWrap>
                        <SocialLogo>
                            <Link to="/" offset={-80}><Img onClick={toggleHome} src={require(`../../images/marca-png.png`)} /></Link>
                        </SocialLogo>
                    <Derechos>Facundo Alcorta ® {new Date().getFullYear()}</Derechos>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/facundo.korn.1/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/facundoalcorta/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/in/facundo-alcorta-997270220/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
                </SocialMediaContainer>
            </FooterWrapper>
        </FooterContainer>
    </>
  )
}

export default Footer