import React from 'react'
import { ServicesContainer, ServicesWrapper, ServicesTitle, ServicesSubtitle, ServicesIcon, ServicesCard, ServicesP, FlipImgWrapper, FlipWrapper, FlipTextWrapper } from './ServicesElements'
import Icon1 from '../../images/html-css-png.png'
import Icon2 from '../../images/laptop-mobile-png.png'
import Icon3 from '../../images/react-png.png'
import Icon4 from '../../images/portfolio-png.png'

const Services = () => {
  return (
    <>
        <ServicesContainer>
            <ServicesTitle>Elegí la opción que más te convenga.</ServicesTitle>
            <ServicesWrapper>
                <ServicesCard>
                    <FlipWrapper>
                        <FlipImgWrapper>
                            <ServicesIcon src={Icon1} />
                            <ServicesSubtitle>Página Estática</ServicesSubtitle>
                        </FlipImgWrapper>
                        <FlipTextWrapper>
                        <ServicesP>Servicio económico para un rápido y efectivo resultado</ServicesP>
                        </FlipTextWrapper>
                    </FlipWrapper>
                </ServicesCard>
                <ServicesCard>
                    <FlipWrapper>
                        <FlipImgWrapper> 
                            <ServicesIcon src={Icon2} />
                            <ServicesSubtitle>Single Page dinámica</ServicesSubtitle>
                        </FlipImgWrapper> 
                        <FlipTextWrapper>
                        <ServicesP>Una single page dinámica con interactividad para el usuario.</ServicesP>
                        </FlipTextWrapper>   
                    </FlipWrapper>
                </ServicesCard>
                <ServicesCard>
                    <FlipWrapper>    
                        <FlipImgWrapper>        
                            <ServicesIcon src={Icon3} />
                            <ServicesSubtitle>Aplicación Web en React</ServicesSubtitle>
                        </FlipImgWrapper>
                        <FlipTextWrapper>
                        <ServicesP>Una app dinámica, moderna y con la última tecnología.</ServicesP>
                        </FlipTextWrapper>
                    </FlipWrapper>
                </ServicesCard>
                <ServicesCard>
                    <FlipWrapper>
                        <FlipImgWrapper>        
                            <ServicesIcon src={Icon4} />
                            <ServicesSubtitle>Recorre la galería.</ServicesSubtitle>
                        </FlipImgWrapper>
                        <FlipTextWrapper>
                        <ServicesP>Mirá mis trabajos y decidí cual se ajusta mejor a tus necesidades.</ServicesP>
                        </FlipTextWrapper>
                    </FlipWrapper>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services