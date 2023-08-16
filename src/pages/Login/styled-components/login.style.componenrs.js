import styled from "styled-components";
import backgroundImage  from "../../../assets/img/Fondo.svg"

export const LayoutLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;


export const ContainerLogin = styled.div`
    background-color: #FFFFFF;
    padding: 2rem;
    border-radius: 4px;
    width: 20%;
    min-width: 280px;
    position: absolute;
`;

export const TitleLogin = styled.h1`
    text-align: center;
    margin-top: 0;
    font-family: 'Poppins';
`;

export const TextSign = styled.p`
    margin: 1rem 0 0 0;
    font-size: 0.9rem;
    font-weight: normal;
    font-family: 'Nunito';
`;

export const SpanSign = styled.span`
    color: black;
    text-decoration: underline;
    cursor: pointer;
    font-family: 'Nunito';
`;