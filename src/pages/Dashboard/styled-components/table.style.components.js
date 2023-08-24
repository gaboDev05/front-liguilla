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

export const WrapperRowTable = styled.tr`
    display: flex;
    justify-content: space-between;
`;

export const StyleHeaderTable = styled.div`
    background-color: #FEC887;
    padding: 12px;
    font-weight: 500;
    font-size: 14px;
    color: black;
    margin: 0;
    vertical-align: top;
    text-align: left;
`;

export const LeftGroup = styled.th`
    display: flex;
    justify-content: flex-start;
`;

export const RightGroup = styled.th`
    display: flex;
    justify-content: flex-end;
`;


export const StyleRowItems = styled.tr`
    display: flex;
    justify-content: space-between;
    cursor: auto;
`;

export const StyleCellTable = styled.div`
    padding: 12px;
    font-size: 14px;
    font-weight: normal;
    color: black;
    text-align: center;
`;