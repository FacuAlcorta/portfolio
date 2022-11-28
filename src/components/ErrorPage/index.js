import styled from "styled-components";

export const ErrorContainerWrap = styled.div`
    max-height: 925px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const ErrorWrapper = styled.div`
    display: flex;
    max-width: 100%;
`
export const ErrorText = styled.h1`
    display: flex;
    font-size: 80px;
    font-weight: bold;
    padding: 5px;
    background: #fff;
    border: 7px solid black;
    border-radius: 10px;
    z-index: 99;

    @media screen and (max-width: 720px) {
        font-size: 50px;
    }

    @media screen and (max-width: 480px) {
        font-size: 35px;
    }
`

export const ErrorBg = styled.img`
    height: 100%;
    max-width: 100%;
`