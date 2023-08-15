import styled from "styled-components"

export const LayoutLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
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