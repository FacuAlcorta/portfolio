import styled from "styled-components";

export const ErrorContainerWrap = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    max-height: 1000px;
    overflow: hidden;
`  

export const ErrorBg = styled.img`
    width: 70%;
    height: 70%;

    @media screen and (max-width: 820) {
        width: 100%;
        height: 100%;
    }
`

export const ErrorWrapper = styled.div`
    margin-top: 20px;
    position: relative;
`
export const ErrorText = styled.h1`
    text-align: center;
    font-size: 80px;

    @media screen and (max-width: 950px) {
        font-size: 60px;
    }

    @media screen and (max-width: 650px) {
        font-size: 50px;
    }

    @media screen and (max-width: 500px) {
        font-size: 35px;
    }
`
