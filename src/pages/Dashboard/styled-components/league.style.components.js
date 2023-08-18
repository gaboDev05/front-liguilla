import styled from "styled-components";

export const ContainerLeague = styled.div`
    background-color: #FFFFFF;
    border-radius: 4px;
    min-width: 280px;
`;

export const StyleTitleLeague = styled.h1`
    font-size: 1.5rem;
    margin: 0 0 0 1rem;
`;

export const WrapperTitleLeague = styled.div`
    background-color: #FEC887;
    padding: 0.5rem;
    border-radius: 4px 4px 0 0;
`;

export const WrapperLeague = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0.5rem;

    &&:hover {
        cursor: pointer;
    }
`;

export const NameLeague = styled.p`
    font-size: 1.2rem;
    margin: 0 0 0 1rem;
`;