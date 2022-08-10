import { useState, useContext } from "react";
import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
}
from "../../utils/firebase/firebase.utils";

import "../signinForm/signinForm.styles.scss";

const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
       await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }
        catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password!');
                    break
                case 'aut/user-not-found':
                    alert("No user found with this email!");
                    break
                default:
                    alert(error);
            }
        }
    };



    const handleChange = (event) => {
        const { name, value } = event.target; //target is the things that are attached to the "input-tag" 
        setFormFields({ ...formFields, [name]: value }); // update the the appropiate formfields
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}></FormInput>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}></FormInput>

                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;

