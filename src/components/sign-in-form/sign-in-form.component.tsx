import { useState, ChangeEvent, FormEvent } from 'react';
import FormInput from 'components/form-input/form-input.component';
import { signInCognito } from 'utils/amazon-cognito/amazon-cognito.utils';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { ToastContainer, toast } from 'react-toastify';
import { SignInContainer } from './sign-in-form.styles';

import 'react-toastify/dist/ReactToastify.css';

const defaultFormFields = {
  userName: '',
  password: '',
};

function SignInForm(): JSX.Element {
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
        <button type="submit">submit</button>
      </form>
    </SignInContainer>
  );
}

export default SignInForm;
