import { useState } from "react";
import TextField from "../../../components/TextField"
import PrimaryButton from "../../../components/PrimaryButton"

const FormSignUp = () => {
    const [userName, newUserName] = useState('');
    const [userPassword, newUserPassword] = useState('');
    const [userEmail, newUserEmail] = useState('');

    const SignUp = async (event) => {
        event.preventDefault();
        console.log(`${userName} -> ${userEmail} -> ${userPassword}`);
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
            <form onSubmit={SignUp}>
                <TextField name='Username' type='Text' placeholder='Enter your username' state={newUserName}/>
                <TextField name='Email' type='Text' placeholder='Enter your email' state={newUserEmail}/>
                <TextField name='Password' type='Password' placeholder='Enter your password' state={newUserPassword}/>
                <PrimaryButton name='Sign Up'/>
            </form>
        </> 
    );
}
 
export default FormSignUp;