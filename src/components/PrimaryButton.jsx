import PropTypes from 'prop-types';

const PrimaryButton = ({ name }) => {
    return (  
        <>
            <button>{name}</button>
        </>
    );
}

PrimaryButton.propTypes = {
    name: PropTypes.string.isRequired
}


export default PrimaryButton;