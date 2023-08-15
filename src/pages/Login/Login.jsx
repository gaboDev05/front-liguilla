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
                    <TitleLogin>Welcome!!</TitleLogin>
                    { authMode === 'signin' ? 
                        <>
                            <FormSignIn></FormSignIn>
                            <TextSign>You are new? <SpanSign onClick={() => setAuthMode('signup')}>Sign up</SpanSign></TextSign>
                        </> :
                        <>
                            <FormSignUp></FormSignUp>
                            <TextSign>Are you already registered? <SpanSign onClick={() => setAuthMode('signin')}>Sign in</SpanSign></TextSign>
                        </>}
                </ContainerLogin>
            </LayoutLogin>
        </>
    );
}

export default Login;