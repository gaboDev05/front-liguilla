import PropTypes from 'prop-types';
import { StyledTextField } from '../styled-components/inputs.style.components';
import { StyledLabel } from '../styled-components/labels.style.components';
import { StyledMessageError } from '../styled-components/message.style.components'
import { ContainerLabelTextField, TextFieldLayout } from '../styled-components/layouts.style.components';
import { useFormContext } from "react-hook-form"
import { findInputError } from '../utilities/findInputError';
import { isFormValid } from '../utilities/isFormInvalid';

// Componente 'common' encargado de ser un campo de escritura de texto
const TextField = ( props ) => {
    const { name, label, type, placeholder, validation } = props;

    const { register, formState: { errors }} = useFormContext();

    const inputError = findInputError(errors, name);
    const isValid = isFormValid(inputError);

    return ( 
        <>
            <TextFieldLayout>
                <ContainerLabelTextField>
                    <StyledLabel>{label}</StyledLabel>
                    {isValid && <StyledMessageError>{inputError.error.message}</StyledMessageError>}
                </ContainerLabelTextField>
                <StyledTextField 
                    id={name}
                    name={name} 
                    type={type}
                    placeholder={placeholder}
                    {...register(name, validation)}
                />
            </TextFieldLayout>  
        </>
    );
}

// Validacion de las props
TextField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validation: PropTypes.object
}

// Valores de las props por defecto
TextField.defaultProps = {
    id: '',
    name: '',
    type: 'Text',
    placeholder: '',
}

export default TextField;