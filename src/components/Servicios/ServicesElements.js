import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #000;

    @media screen and (max-width: 1200px){
        height: 900px;
    }

    @media screen and (max-width: 780px){
        height: 1600px;
    }

    @media screen and (max-width: 580px){
        height: 1700px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1500px;
    position: relative;
    margin: o auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 780px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        curosr: pointer;
    }

    @media screen and (max-width: 1200px ){
        height: 480px;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 180px;
    margin-bottom: 10px;
`

export const ServicesTitle = styled.h1`
    font-size: 3rem;
    color: #fff;
    margin-bottom: 64px;
    text-decoration: underline;

    @media screen and (max-width: 480px){
        font-size: 3rem;
    }
`

export const ServicesSubtitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;

`

export const ServicesP = styled.p`
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 20px;
`