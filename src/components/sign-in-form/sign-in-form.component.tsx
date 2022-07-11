import {
  useState, ChangeEvent, FormEvent, useContext,
} from 'react';
import FormInput from 'components/form-input/form-input.component';
import Button from 'components/button/button.component';
import { signInCognito } from 'utils/amazon-cognito/amazon-cognito.utils';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { ToastContainer, toast } from 'react-toastify';
import { CognitoSessionContext } from 'contexts/cognito-session.context';
import { SignInContainer } from './sign-in-form.styles';

import 'react-toastify/dist/ReactToastify.css';

const defaultFormFields = {
  userName: '',
  password: '',
};

function SignInForm(): JSX.Element {
  const { setInSession } = useContext(CognitoSessionContext);
  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    password, userName,
  } = formFields;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = event.target;
    setFormFields({ ...formFields, [inputName]: value });
  };

  const handleOnSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const result = await signInCognito(userName, password);
    if (result instanceof CognitoUserSession) {
      setInSession(true);
      toast.success('Logged in successfully.');
    } else {
      toast.error(`Log in failed: ${result}.`);
    }
    setFormFields(defaultFormFields);
  };
  return (
    <SignInContainer>
      <ToastContainer />
      <form onSubmit={handleOnSubmit}>
        <FormInput
          label="USERNAME"
          required
          type="text"
          name="userName"
          value={userName}
          onChange={handleOnChange}
        />
        <FormInput
          label="PASSWORD"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
        />
        <Button name="submit" type="submit" />
      </form>
    </SignInContainer>
  );
}

export default SignInForm;
