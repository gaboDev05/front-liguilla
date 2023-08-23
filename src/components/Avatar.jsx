import { StyledAvatar, StyledBadge, StyledImagen, StyledSpan } from "../styled-components/avatar.style.components";
import PropTypes from 'prop-types';

const Avatar = ({ isBackground, name, src, width, height }) => {
    return ( 
        <>
            <StyledAvatar $isBackground={isBackground} width={width} height={height}>
                {src ? <StyledImagen $isBackground={isBackground} src={src}/> : <StyledSpan>{name[0].toUpperCase()}</StyledSpan>}
            </StyledAvatar>
        </> 
    );
}

Avatar.propTypes = {
    isBackground: PropTypes.bool,
    name: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

// Completar
Avatar.defaultProps = {
    width: '2rem',
    height: '2rem'
}
 
export default Avatar;