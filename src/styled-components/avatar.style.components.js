import styled, { css } from "styled-components";

const sharedStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const StyledAvatar = styled.div`
    //border: 3px #FEC887 solid;
    border-radius: 50%;
    position: relative;
    height: ${(props) => props.height};
    width: ${(props) => props.width};

    &&:hover {
        cursor: pointer;
    }
`;

export const StyledImagen = styled.img`
    ${sharedStyles}
    object-fit: cover;
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  background-color: #FEC887;
  ${sharedStyles}
`;

export const StyledBadge = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  right: -2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 4px solid #121212;
  background: #4ded30;
`;


