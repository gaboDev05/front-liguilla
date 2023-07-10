
import { useState } from "react";
import TextField from "../../components/TextField";
import PrimaryButton from "../../components/PrimaryButton";


const Login = () => {
    const [userName, newUserName] = useState('')
    const [userPassword, newUserPassword] = useState('')

    const printUser = () => {
        console.log(`${userName} ${userPassword}`)
    }

    return ( 
        <>
            <h1>Hi, Gabo 🦊</h1>
            <TextField name='User' type='Text' placeholder='Enter your username' state={newUserName}/>
            <TextField name='Pass' type='Password' placeholder='Enter your password' state={newUserPassword}/>
            <PrimaryButton name='Login'/>
        </>
    );
}

export default Login;