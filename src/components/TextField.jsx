import PropTypes from 'prop-types';
import { StyledTextField } from '../styled-components/inputs.style.components';
import { StyledLabel } from '../styled-components/labels.style.components';

// Componente 'common' encargado de ser un campo de escritura de texto
const TextField = ( props ) => {
    const { name, label, type, required, placeholder, state } = props;

    // Metodo que se ejecuta cada vez que cambia el valor del input debido al onChnage
    const handlerChange = (event) => { // Recibe un evento por parametro
        event.preventDefault(); // Evita el comportamiento por defecto del input
        //state(event.target.value) // Funcion que se le pasa como prop que es la responsable de cambiar el estado en el componente padre
        
        state( {...props, value: event.target.value} );
    }


    return ( 
        <>
            <StyledLabel>{label}</StyledLabel>
            <StyledTextField 
                id={name}
                name={name} 
                type={type}
                required={required}
                placeholder={placeholder}
                onChange={handlerChange}
            />
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
    required: PropTypes.bool,
    validation: PropTypes.object,
    state: PropTypes.func.isRequired,
}

// Valores de las props por defecto
TextField.defaultProps = {
    id: '',
    name: '',
    type: 'Text',
    placeholder: '',
    required: false,
}

export default TextField;