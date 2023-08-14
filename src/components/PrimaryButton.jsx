import PropTypes from 'prop-types';
import { StyledPrimaryButton } from '../styled-components/buttons.style.components';

const PrimaryButton = ({ name, onClick }) => {
    return (  
        <>
            <StyledPrimaryButton onClick={onClick}>{name}</StyledPrimaryButton>
        </>
    );
}

PrimaryButton.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default PrimaryButton;