
// Componente 'common' encargado de ser un campo de escritura de texto
const TextField = ({ name, type, placeholder, required=true, state }) => {
    
    // Metodo que se ejecuta cada vez que cambia el valor del input debido al onChnage
    const handlerChange = (event) => { // Recibe un evento por parametro
        event.preventDefault() // Evita el comportamiento por defecto del input
        state(event.target.value) // Funcion que se le pasa como prop que es la responsable de cambiar el estado en el componente padre
    }

    return ( 
        <>
            <input 
                onChange={handlerChange}
                required={required}
                type={type} 
                name={name} 
                placeholder={placeholder}
            />
        </>
    );
}

export default TextField;