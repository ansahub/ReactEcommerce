import {useState} from "react";
import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import "../signupform/signupform.styles.scss";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    
const resetFormFields = () => {
    setFormFields(defaultFormFields);
};

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("Password do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password);

            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
            alert("Sign up succeeded!");
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            else {
                console.log("An error occured", error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target; //target is the things that are attached to the "input-tag" 
        setFormFields({ ...formFields, [name]: value }); // update the the appropiate formfields
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label = "Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}></FormInput>

                <FormInput label = "Email" type="email" required onChange={handleChange} name="email" value={email}></FormInput>

                <FormInput label = "Password" type="password" required onChange={handleChange} name="password" value={password}></FormInput>

                <FormInput label = "Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}></FormInput>

                <Button type="submit">Sign up</Button>

            </form>
        </div>
    );
};

export default SignUpForm;

