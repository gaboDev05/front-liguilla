/**  Customn hook que permite manejar los campos de un formulario y sus errores correspondientes. */
import { useState } from "react";

const useFormFields = (initialState) => {
    const [fields, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});

    const getErrors = () => {
        const newErrors = { ...errors };
        // **Importante** //
        // No es recomendable actualizar el estado dentro de un bucle. En React, las actualizaciones de estado pueden ser asíncronas, 
        // lo que significa que no se garantiza que se ejecuten de inmediato. Si intentas actualizar el estado dentro de un bucle, 
        // es posible que te encuentres con problemas de concurrencia, ya que cada llamada podría estar operando en una versión desactualizada del estado.
        console.log(fields);
        Object.keys(fields).forEach((field) => {
            if (!fields[field].trim()) {
                newErrors[field] = `The ${field} is required`;
            } else {
                delete newErrors[field];
            }
        });
        setErrors(newErrors);
    };
  
    return [
        fields,
        function (event) {
            setValues({
            ...fields,
            [event.target.id]: event.target.value
            });
        },
        getErrors,
        errors
    ];
}

export default useFormFields;