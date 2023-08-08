import { useState } from "react";
import TextField from "../../../components/TextField"
import PrimaryButton from "../../../components/PrimaryButton"

const FormSignIn = () => {
    const [userName, newUserName] = useState('');
    const [userPassword, newUserPassword] = useState('');

    const SignIn = async (event) => {
        event.preventDefault();
        console.log(`${userName} -> ${userPassword}`);
        /*let { data, error } = await supabase.auth.signInWithPassword({
            email: userName,
            password: userPassword
        })
        //console.log(data, error);
        const { id } = data.user;
        //console.log(id)*/
    }

    return ( 
        <>
            <form onSubmit={SignIn}>
                <TextField name='Username' type='Text' placeholder='Enter your username' state={newUserName}/>
                <TextField name='Password' type='Password' placeholder='Enter your password' state={newUserPassword}/>
                <PrimaryButton name='Sign In'/>
            </form>
        </> 
    );
}
 
export default FormSignIn;