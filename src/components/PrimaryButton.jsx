import PropTypes from 'prop-types';
import { StyledPrimaryButton } from '../styled-components/buttons.style.components';

const PrimaryButton = ({ name }) => {
    return (  
        <>
            <StyledPrimaryButton>{name}</StyledPrimaryButton>
        </>
    );
}

PrimaryButton.propTypes = {
    name: PropTypes.string.isRequired
}

export default PrimaryButton;