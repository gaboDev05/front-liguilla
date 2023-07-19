import PropTypes from 'prop-types';
import { StyledTextField } from '../styled-components/inputs.style.components';
import { StyledLabel } from '../styled-components/labels.style.components';

// Componente 'common' encargado de ser un campo de escritura de texto
const TextField = ({ name, type, placeholder, required, state }) => {
    
    // Metodo que se ejecuta cada vez que cambia el valor del input debido al onChnage
    const handlerChange = (event) => { // Recibe un evento por parametro
        event.preventDefault() // Evita el comportamiento por defecto del input
        state(event.target.value) // Funcion que se le pasa como prop que es la responsable de cambiar el estado en el componente padre
    }

    return ( 
        <>
            <StyledLabel>{name}</StyledLabel>
            <StyledTextField 
                onChange={handlerChange}
                required={required}
                type={type} 
                name={name} 
                placeholder={placeholder}
            />
        </>
    );
}

// Validacion de las props
TextField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    state: PropTypes.func.isRequired
}

// Valores de las props por defecto
TextField.defaultProps = {
    name: '',
    type: 'Text',
    placeholder: '',
    required: false,
}

export default TextField;