import React,{useState, useEffect} from 'react';
import TextField from "./textField";
import PasswordField from './passwordField';
import * as yup from "yup";


function DeveloperSignInForm(props){

    const defaultState = {

        email: "",
        password: "",

    }

    const [formState, setFormState] = useState(defaultState);
    const [errors, setErrors] = useState({...defaultState})
    const [buttonDisabled, setButtonDisabled] = useState(true);



    let formSchema = yup.object().shape({

        email: yup.string().email("This is not a valid email").required("Please enter your email."),
        password: yup.string().required("Password is required").min(6, "Passwords must be at least 6 characters in length"),

    });

    //Turns button off unless form is correctly filled
    useEffect(() => {

        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid)
        });
    }, [formState]);


    //Entering and submitting data
    const submitData = e => {
        e.preventDefault();
        //Axios post here
        props.register(formState)
    }

    const handleChange = e => {

        setFormState({
            ...formState, [e.target.name]: e.target.value
        });

        inputChange(e);
    }

    const inputChange = e => {
        e.persist();
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors, [e.target.name]: ""
                });
            })
            .catch(err => {
                setErrors({...errors, [e.target.name]: err.errors[0]})
            });
    };

    return(
        <>
            <form className="businessSignUp">

                <TextField label = 'Email Address'
                           name="email"
                           value={formState.email}
                           handleChange={handleChange}
                />

                <br />

                <PasswordField label='Password'
                               name="password"
                               value={formState.password}
                               handleChange={handleChange}
                />

                <br />

                <div className="underFormText">New User? <span className="blueTextDefault" onClick={()=>{props.stateChanger('devSignUp')}}>Create account</span></div>
                <br />

                <div className="f_dataS" disabled={buttonDisabled}>Submit</div>

            </form>

            <div className="errorDiv">
                {errors.email.length > 0 ? (<p className="error">{errors.email}</p>):
                    errors.password.length > 0 ? (<p className="error">{errors.password}</p>): null}

            </div>
        </>
    )
}

export default DeveloperSignInForm;