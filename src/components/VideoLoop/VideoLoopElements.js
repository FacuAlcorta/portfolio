import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link as LinkR } from "react-router-dom";

export const LoopContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    }
`

export const LoopBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const LoopContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    paddin: 8px 24px;
    display: flex;
    flex-direction: column;
    alignt-items: center;
`

export const LoopH1 = styled.h1`
    color: #fff;
    font-size: 78px;
    text-align: center;

    @media screen and (max-width 760px){
        font-size: 70px;
    }

    @media screen and (max-width 480px){
        font-size: 55px;
    }
`

export const LoopP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 50px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width 760px){
        font-size: 45px;
    }

    @media screen and (max-width 480px){
        font-size: 35px;
    }
`

export const LoopBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    alignt-items: center;
`

export const Link = styled(LinkR)`
    display: flex;
    flex-direction: row;
    alignt-items: center;
    text-decoration: none;
    color: #fff;
`


export const ArrowFrd = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 35px;
`
export const ArrowRgt = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 35px;
`
