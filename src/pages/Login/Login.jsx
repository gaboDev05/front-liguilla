
import { useState } from "react";
import TextField from "../../components/TextField";
import PrimaryButton from "../../components/PrimaryButton";
import { ContainerLogin, LayoutLogin} from "./styled-components/login.style.componenrs";


const Login = () => {
    const [userName, newUserName] = useState('');
    const [userPassword, newUserPassword] = useState('');

    const Login = (event) => {
        event.preventDefault();
        console.log(`${userName} -> ${userPassword}`);
    }

    return ( 
        <>
            <LayoutLogin>
                <ContainerLogin>
                    <h1>Bienvenido ⚽️🥅</h1>
                    <form onSubmit={Login}>
                        <TextField name='Username' type='Text' placeholder='Enter your username' state={newUserName}/>
                        <TextField name='Password' type='Password' placeholder='Enter your password' state={newUserPassword}/>
                        <PrimaryButton name='Login'/>
                    </form>
                </ContainerLogin>
            </LayoutLogin>
        </>
    );
}

export default Login;