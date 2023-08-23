import styled from "styled-components";

export const ContainerTablePosition = styled.div`
    grid-column: 2/4;
    margin-left: 1.5rem;
`;

export const StyleTablePosition = styled.table`
    border-collapse: collapse;
    border: none;
    width: 100%;
    background-color: #FFFFFF;
`;

export const StyleRowHeaderTable = styled.thead`
    background-color: #FEC887;
    transition: all 0.25s ease;
    border-radius: 4px;
`;

export const WrapperRowTable = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyleHeaderTable = styled.th`
    background-color: #FEC887;
    padding: 12px;
    font-weight: 500;
    font-size: 14px;
    color: black;
    vertical-align: top;
    text-align: left;
`;

export const StyleRowItems = styled.tr`
    cursor: auto;
`;

export const StyleCellTable = styled.td`
    padding: 14px;
    font-size: 14px;
    color: black;
    vertical-align: top;
    text-align: left;
`;