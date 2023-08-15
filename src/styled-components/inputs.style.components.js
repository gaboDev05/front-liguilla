import styled from 'styled-components'

export const StyledTextField = styled.input`
    display: block;
    font-size: 1rem;
    font-family: 'Jost';
    border-radius: 4px;
    width: 100%;
    padding: 0.6rem;
    margin-top: 0.6rem;
    margin-bottom: 0.5rem;
    border: none;
    box-sizing: border-box;
    color: black;
    border: 2px solid transparent;
    background-color: #F5F5F5;

    ${props => props.focused && `
        color: red;
    `}
`;
