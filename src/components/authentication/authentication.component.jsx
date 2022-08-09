import SignUpForm from "../signupform/signupform.component";
import SignInForm from '../signinForm/signinForm.component';
import '../authentication/authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
