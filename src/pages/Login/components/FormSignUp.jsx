import TextField from "../../../components/TextField"
import PrimaryButton from "../../../components/PrimaryButton"
import { FormProvider, useForm } from "react-hook-form"
import { username_validation, password_validation, email_validation } from  "../../../utilities/inputValidations"

const FormSignUp = () => {
    const methods = useForm();

    const signUp = methods.handleSubmit(data => {
        console.log(data);
    });

    return ( 
        <>
            <FormProvider {...methods}>
                <form onSubmit={e => e.preventDefault()} noValidate autoComplete="off">
                    <TextField {...username_validation}/>
                    <TextField {...email_validation}/>
                    <TextField {...password_validation}/>
                    <PrimaryButton name='Sign Up' onClick={signUp}/>
                </form>
            </FormProvider>
        </> 
    );
}
 
export default FormSignUp;