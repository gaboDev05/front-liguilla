import styled from "styled-components";


export const StyledAvatar = styled.span`
    display: block;
    position: relative;
    padding: 5px;
    border-radius: 50%;
    height: ${(props) => props.height};
    width: ${(props) => props.width};

    &&:hover {
        cursor: pointer;
    }
`;

export const StyledImagen = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #FEC887;
    object-fit: cover;
`;


