import TextField from "../../../components/TextField"
import PrimaryButton from "../../../components/PrimaryButton"
import useFormFields from "../../../hooks/useFields"
import { username_validation, password_validation } from  "../../../utilities/inputValidations"

const FormSignIn = () => {
    
    const initialState = {
        username: {
            value: '', 
            validation: {}
        },
        password: {
            value: '', 
            validation: {}
        }
    }

    const [fields, handleFieldChange, getErrors, errors] = useFormFields(initialState);
    //const [userName, newUserName] = useState('');
    //const [userPassword, newUserPassword] = useState('');

    const signIn = async (event) => {
        event.preventDefault();
        getErrors();
        console.log(`${fields.username.value} -> ${fields.password.value}`);
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
                <TextField { ...username_validation } state={handleFieldChange}/>
                <TextField { ...password_validation } state={handleFieldChange}/>
                <PrimaryButton name='Sign In'/>
            </form>
        </> 
    );
}
 
export default FormSignIn;