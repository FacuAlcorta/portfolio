import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=> (primary ? '#00e379' : '#363434 ')};
    white-space: nowrap;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=> (dark ? ' #363434 ' : '#fff')};
    font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1px solid #00e379;
    cursor: pointer;
    display: flex;
    justify-content: center;
    alignt-items: center;
    transition: all 0.2 ease-in-out;

    &:hover {
        border: 1px solid #00e379;
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? '#fff' : '#00e379')}
    }
`