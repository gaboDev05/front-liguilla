import styled from "styled-components";


export const ContainerLeague = styled.div`
    background-color: ${({ theme }) => theme.background_container};
    border-radius: 4px;
    min-width: 280px;
    align-self: start;
`;

export const StyleTitleLeague = styled.h1`
    font-size: 1.2rem;
    margin: 0 0 0 1rem;
    color: ${({ theme }) => theme.text_primary};
`;

export const WrapperTitleLeague = styled.div`
    padding: 0.5rem;
    border-radius: 4px 4px 0 0;
`;

export const WrapperListLeague = styled.div`
    padding: 0.75rem 0 1rem;
`;

export const WrapperLeague = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.25rem 1rem;

    &&:hover {
        cursor: pointer;
    }
`;

export const NameLeague = styled.p`
    font-size: 1rem;
    font-weight: bolder;
    margin: 0 0 0 1.5rem;
    color: ${({ theme }) => theme.text_primary};
`;