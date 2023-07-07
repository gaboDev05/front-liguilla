import { useState } from "react";


const TextField = ({ name, type, required=true }) => {
    const [Text, setText] = useState('Hola');

    return ( 
        <>
            <input 
                required={required}
                type={type} 
                name={name} 
                placeholder={Text}
            />
        </>
     );
}
 
export default TextField;