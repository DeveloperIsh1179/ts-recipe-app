import { useContext } from 'react';
import SignUpForm from 'components/sign-up-form/sign-up-form.component';
import SignInForm from 'components/sign-in-form/sign-in-form.component';
import { FormContext } from 'contexts/form.context';
import { AuthenticationContainer, HeaderContainer } from './authentication.styles';

function Authentication(): JSX.Element {
  const { isNewUser, setIsNewUser } = useContext(FormContext);

  const handleOnClick = () => {
    setIsNewUser(!isNewUser);
  };
  return (
    <AuthenticationContainer>
      <HeaderContainer>
        <div onClick={handleOnClick} role="presentation">
          <h1>SIGN UP</h1>
        </div>
        <div onClick={handleOnClick} role="presentation">
          <h1>LOG IN</h1>
        </div>
      </HeaderContainer>
      {isNewUser
        ? (<SignUpForm />
        ) : (<SignInForm />)}
    </AuthenticationContainer>
  );
}

export default Authentication;
