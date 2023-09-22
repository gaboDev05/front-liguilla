import { StyleSwitchInput, StyleSwitchLabel, StyleSwitchButton } from "../styled-components/switch.style.components";


const Switch = ({ id }) => {
    return ( 
        <>
            <StyleSwitchInput 
                id={id}
                className="switch-checkbox"
                type="checkbox"
            />
            <StyleSwitchLabel className="switch-label" htmlFor={id}>
                <StyleSwitchButton className="switch-button"/>
            </StyleSwitchLabel>
        </>
     );
}
 
export default Switch;