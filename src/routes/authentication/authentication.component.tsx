import SignInForm from 'components/sign-in-form/sign-in-form.component';
import { AuthenticationContainer } from './authentication.styles';

function Authentication(): JSX.Element {
  return (
    <AuthenticationContainer>
      <SignInForm />
    </AuthenticationContainer>
  );
}

export default Authentication;
