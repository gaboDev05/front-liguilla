import { StyledAvatar, StyledImagen } from "../styled-components/avatar.style.components";
import PropTypes from 'prop-types';

const Avatar = ({ isActive, name, src, width, height }) => {
    return ( 
        <>
            <StyledAvatar width={width} height={height}>
                <StyledImagen/>
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
    width: '5rem',
    height: '5rem'
}
 
export default Avatar;