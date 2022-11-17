import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const LoopContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    /* Add :before styles*/
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
    font-size: 48px;
    text-align: center;

    @media screen and (max-width 760px){
        font-size: 40px;
    }

    @media screen and (max-width 480px){
        font-size: 32px;
    }
`

export const LoopP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width 760px){
        font-size: 24px;
    }

    @media screen and (max-width 480px){
        font-size: 18px;
    }
`

export const LoopBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    alignt-items: center;
`

export const ArrowFrd = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRgt = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
