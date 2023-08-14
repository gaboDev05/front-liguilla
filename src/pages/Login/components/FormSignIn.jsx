import TextField from "../../../components/TextField"
import PrimaryButton from "../../../components/PrimaryButton"
import { FormProvider, useForm } from "react-hook-form"
import { username_validation, password_validation } from  "../../../utilities/inputValidations"

const FormSignIn = () => {
    const methods = useForm();

    const signIn = methods.handleSubmit(data => {
        console.log(data);
    });
    
    return ( 
        <FormProvider {...methods}>
            <form onSubmit={e => e.preventDefault()} noValidate autoComplete="off">
                <TextField {...username_validation}/>
                <TextField {...password_validation}/>
                <PrimaryButton name='Sign In' onClick={signIn}/>
            </form>
        </FormProvider> 
    );
}
 
export default FormSignIn;