import { ContainerLogin, LayoutLogin, TitleLogin, TextSign, SpanSign } from "./styled-components/login.style.componenrs";
import FormSignIn from "./components/FormSignIn";
import { useState } from "react";
import FormSignUp from "./components/FormSignUp";


const Login = () => {
    const [authMode, setAuthMode] = useState('signin')
    
    return ( 
        <>
            <LayoutLogin>
                <ContainerLogin>
                    <TitleLogin>Bienvenido ⚽️🥅</TitleLogin>
                    
                    { authMode === 'signin' ? 
                        <>
                            <FormSignIn></FormSignIn>
                            <TextSign>Eres nuevo? <SpanSign onClick={() => setAuthMode('signup')}>Registrate</SpanSign></TextSign>
                        </> :
                        <>
                            <FormSignUp></FormSignUp>
                            <TextSign>Ya estas registrado? <SpanSign onClick={() => setAuthMode('signin')}>Inicia Sesion</SpanSign></TextSign>
                        </>}
                </ContainerLogin>
            </LayoutLogin>
        </>
    );
}

export default Login;