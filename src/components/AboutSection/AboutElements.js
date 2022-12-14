import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const AboutContainer = styled.div`
    color: #fff;
    background: ${({lightBg})=> (lightBg ? '#fff' : '#000')};

    @media screen and (max-width 768px){
        padding: 100px 0;
    }
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 600px){
        grid-template-areas: ${({imgStart})=> (imgStart ? `'col1' 'col2'` : `'col1 col1 col1' 'col2 col2 col2'`)};
    }
`

export const Column1 = styled.div`
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #00ca6b;
    font-size: 30px;
    line-height: 40px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-decoration: underline;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-heihgt: 1.1;
    font-weight: 600;
    color: ${({lightText})=> (lightText ? '#fff' : '#000')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 30px;
    line-height: 27px;
    color: ${({darkText})=> (darkText ? '#000' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`

export const BtnWrapper = styled.div`
    diplay: flex;
    justify-content: flex-start;
    
`

export const BtnWrapper1 = styled.div`
    diplay: flex;
    justify-content: flex-start;
 `

export const Link = styled(LinkR)`
    text-decoration: none;
    color: #fff;
`

export const LinkS = styled(LinkR)`
    text-decoration: none;
    color: #fff;
`

export const ImgWrap = styled.div` 
    max-width: auto;
    height: auto;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`