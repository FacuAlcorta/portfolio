import React from 'react'
import { FooterContainer, FooterWrapper, FooterLinkContainer, FooterLinkWrap, FooterLinkItems, FooterLinkTitle, FooterLinkA, FooterLinkS, FooterLinkR, SocialMediaContainer, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, Derechos, Img } from './Footer'
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
                            <FooterLinkS to="/"
                            smooth={true}
                            duration={450}
                            spy={true}
                            offset={-80}
                            >Inicio</FooterLinkS>
                            <FooterLinkS to="skills"
                            smooth={true}
                            duration={450}
                            spy={true}
                            offset={-80}
                            >Skills</FooterLinkS>
                             <FooterLinkS to="design"
                             smooth={true}
                             duration={450}
                             spy={true}
                             offset={-80}
                             >Diseño</FooterLinkS>
                             </FooterLinkItems>
                             <FooterLinkItems>
                            <FooterLinkTitle>Sobre mi</FooterLinkTitle>
                            <FooterLinkR to="*">Bio</FooterLinkR>
                            <FooterLinkR to="*">Reseñas</FooterLinkR>
                             <FooterLinkR to="/contacto">Contacto</FooterLinkR>
                             </FooterLinkItems>
                             <FooterLinkItems>
                            <FooterLinkTitle>Redes Sociales.</FooterLinkTitle>
                            <FooterLinkA href="https://www.facebook.com/facundo.korn.1/" target="_blank" aria-label="Facebook">Facebook</FooterLinkA>
                            <FooterLinkA href="https://www.instagram.com/facundoalcorta/" target="_blank" aria-label="Instagram">Instagram</FooterLinkA>
                             <FooterLinkA href="https://www.linkedin.com/in/facundo-alcorta-997270220/" target="_blank" aria-label="Linkedin">Linkedin</FooterLinkA>
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