import TextField from "../../../components/TextField"
import PrimaryButton from "../../../components/PrimaryButton"
import useFormFields from "../../../hooks/useFields";

const FormSignIn = () => {
    const initialState = {
        username: '',
        password: ''
    }

    const [fields, handleFieldChange, getErrors, errors] = useFormFields(initialState);
    //const [userName, newUserName] = useState('');
    //const [userPassword, newUserPassword] = useState('');

    const signIn = async (event) => {
        event.preventDefault();
        getErrors();
        console.log(`${fields.username} -> ${fields.password}`);
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
            <form onSubmit={signIn}>
                <TextField name='username' type='Text' placeholder='Enter your username' state={handleFieldChange}/>
                <TextField name='password' type='Password' placeholder='Enter your password' state={handleFieldChange}/>
                <PrimaryButton name='Sign In'/>
            </form>
        </> 
    );
}
 
export default FormSignIn;