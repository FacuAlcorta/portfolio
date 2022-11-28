import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 500px;
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
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 340px;
    cursor: pointer;

    @media screen and (max-width: 1200px ){
        height: 320px;
    }
`

export const FlipWrapper = styled.div`
    width: 99%;
    heigth: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background: #fff;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    &:hover {
        transform: perspective(600px) rotateY(-180deg);
        transition: 1s;
    }
`
export const FlipImgWrapper = styled.div`
    width: 100%;
    max-width: 180px;
    position: absolute;
`

export const FlipTextWrapper = styled.div`
    width: 100%;
    backface-visibility: hidden;
    transform: perspective(600px) rotateY(180deg)
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
    font-size: 2rem;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 20px;
`