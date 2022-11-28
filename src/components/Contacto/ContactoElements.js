import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 800px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    )
`

export const FormWrapper = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 400px) {
            height: 80%;
        }
        @media screen and (max-height: 1400px) {
            height: 90%;
        }
`

export const NavLogo = styled(Link)`
        margin-top: 10px;
        margin-bottom: 15px;
        z-index: 3;
        background: #000;
        border-radius: 50%;

        @media screen and (max-height: 1000px) {
            margin-top: 40px;
        }
`

export const FormContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction; column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const Form = styled.form`
    background: #000;
    max-width: 600px;
    heigth: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 500px) {
        padding: 32px 32px;
    }
    @media screen and (max-height: 1500px) {
        padding: 0 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 10px;
    color: #fff;
    font-size: 50px;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 38px;
    }
`

export const FormLabel = styled.label`
    display: flex;
    flex-direction: flex-start;
    margin: 8px;
    font-size: 30px;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 25px;
    }
`

export const FormInput = styled.input`
    font-size: 22px;
    padding: 0 12px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    max-length: 4;

    @media screen and (max-height: 1000px) {
        margin-bottom: 10px;
    }
`

export const FormInputText = styled.textarea`
    font-size: 24px;
    padding: 8px 8px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    height: 160px;
`

export const FormButton = styled.button`
    display: flex;
    justify-content: center;
    background: #fff;
    padding: 16px;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 30px;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        transform: scale(1.04);
        transition: 0.3 ease-in-out;
    }
`
