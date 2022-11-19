import React from 'react'
import { ServicesContainer, ServicesWrapper, ServicesTitle, ServicesSubtitle, ServicesIcon, ServicesCard, ServicesP } from './ServicesElements'
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
                    <ServicesIcon src={Icon1} />
                    <ServicesSubtitle>Página Estática</ServicesSubtitle>
                    <ServicesP>Servicio económico para un rápido y efectivo resultado</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesSubtitle>Single Page dinámica</ServicesSubtitle>
                    <ServicesP>Una single page dinámica con interactividad para el usuario.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesSubtitle>Aplicación Web en React</ServicesSubtitle>
                    <ServicesP>Una app dinámica, moderna y con la última tecnología.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesSubtitle>Recorre la galería.</ServicesSubtitle>
                    <ServicesP>Mirá mis trabajos y decidí cual se ajusta mejor a tus necesidades.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services