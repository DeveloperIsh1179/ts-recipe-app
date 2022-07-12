import { useContext } from 'react';
import SignUpForm from 'components/sign-up-form/sign-up-form.component';
import SignInForm from 'components/sign-in-form/sign-in-form.component';
import { FormContext } from 'contexts/form.context';
import {
  AuthenticationContainer,
  HeaderContainer,
  SignInBanner,
  SignUpBanner,
} from './authentication.styles';

function Authentication(): JSX.Element {
  const { isNewUser, setIsNewUser } = useContext(FormContext);

  const setIsNewUserTrue = () => {
    setIsNewUser(true);
    const signUp = document.getElementById('signUp');
    const signIn = document.getElementById('signIn');
    if (signUp && signIn) {
      signUp.style.color = 'black';
      signIn.style.color = 'grey';
    }
  };

  const setIsNewUserFalse = () => {
    setIsNewUser(false);
    const signUp = document.getElementById('signUp');
    const signIn = document.getElementById('signIn');
    if (signUp && signIn) {
      signUp.style.color = 'grey';
      signIn.style.color = 'black';
    }
  };
  return (
    <AuthenticationContainer>
      <HeaderContainer>
        <SignUpBanner
          id="signUp"
          onClick={setIsNewUserTrue}
          role="presentation"
        >
          <h1>SIGN UP</h1>
        </SignUpBanner>
        <SignInBanner
          id="signIn"
          onClick={setIsNewUserFalse}
          role="presentation"
        >
          <h1>LOG IN</h1>
        </SignInBanner>
      </HeaderContainer>
      {isNewUser
        ? (<SignUpForm />
        ) : (<SignInForm />)}
    </AuthenticationContainer>
  );
}

export default Authentication;
