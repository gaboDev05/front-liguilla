import styled, { css } from "styled-components";


const headerStyle = css`
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    color: black;
    margin: 0;
    vertical-align: top;
    text-align: center;
`;

export const ContainerTablePosition = styled.div`
    grid-column: 2/4;
    margin-left: 1.5rem;
`;

export const WrapperTitleTable = styled.div`
    background-color: #FEC887;
    padding: 0.5rem;
    border-radius: 4px 4px 0 0;
`;

export const StyleTitleTable = styled.h1`
    font-size: 1.2rem;
    margin: 0 0 0 1rem;
    text-align: center;
`;

export const StyleTablePosition = styled.table`
    border-collapse: collapse;
    border: none;
    width: 100%;
    border-radius: 0 0 4px 4px;
    background-color: #FFFFFF;
`;

export const StyleRowHeaderTable = styled.thead`
    background-color: #FEC887;
    transition: all 0.25s ease;
`;

export const StyleHeaderTable = styled.th`
    background-color: #FEC887;
    
    ${headerStyle}
`;

export const StyleHeaderTeam = styled.th`
    ${headerStyle}

    background-color: #FEC887;
    text-align: left;
`;

export const StyleCellTeam = styled.td`
    ${headerStyle}

    background-color: #FFFFFF;
    text-align: left;
    padding: 0.7rem;
    width: 35rem;
`;

export const StyleCellTable = styled.td`
    padding: 0.7rem;
    font-size: 0.9rem;
    font-weight: normal;
    color: black;
    text-align: center;
`;