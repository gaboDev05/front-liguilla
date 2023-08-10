import TextField from "../../../components/TextField"
import PrimaryButton from "../../../components/PrimaryButton"
import useFormFields from "../../../hooks/useFields";

const FormSignUp = () => {
    const initialState = {
        username: '',
        password: '',
        email: ''
    }

    const [fields, handleFieldChange, getErrors, errors] = useFormFields(initialState);
    //const [userName, newUserName] = useState('');
    //const [userPassword, newUserPassword] = useState('');
    //const [userEmail, newUserEmail] = useState('');


    const signUp = async (event) => {
        event.preventDefault();
        getErrors();
        console.log(`${fields.username} -> ${fields.password} -> ${fields.email}`);
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
            <form onSubmit={signUp}>
                <TextField name='username' type='Text' placeholder='Enter your username' state={handleFieldChange}/>
                <TextField name='email' type='Text' placeholder='Enter your email' state={handleFieldChange}/>
                <TextField name='password' type='Password' placeholder='Enter your password' state={handleFieldChange}/>
                <PrimaryButton name='Sign Up'/>
            </form>
        </> 
    );
}
 
export default FormSignUp;