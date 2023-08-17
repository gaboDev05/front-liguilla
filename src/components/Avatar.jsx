import { StyledAvatar, StyledBadge, StyledImagen, StyledSpan } from "../styled-components/avatar.style.components";
import PropTypes from 'prop-types';

const Avatar = ({ name, src, width, height }) => {
    return ( 
        <>
            <StyledAvatar width={width} height={height}>
                {src ? <StyledImagen src={src}/> : <StyledSpan>{name[0].toUpperCase()}</StyledSpan>}
            </StyledAvatar>
        </> 
    );
}

Avatar.propTypes = {
    isActive: PropTypes.bool,
    name: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

// Completar
Avatar.defaultProps = {
    width: '2.5rem',
    height: '2.5rem'
}
 
export default Avatar;