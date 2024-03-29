import {
  useState, ChangeEvent, FormEvent, useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from 'components/form-input/form-input.component';
import Button from 'components/button/button.component';
import { signInCognito } from 'utils/amazon-cognito/amazon-cognito.utils';
import { CognitoUserSession } from 'amazon-cognito-identity-js';
import { ToastContainer, toast } from 'react-toastify';
import { CognitoSessionContext } from 'contexts/cognito-session.context';
import md5 from 'md5';
import { Form, SignInContainer } from './sign-in-form.styles';

import 'react-toastify/dist/ReactToastify.css';

const defaultFormFields = {
  userName: '',
  password: '',
};

function SignInForm(): JSX.Element {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    const result = await signInCognito(userName, password);
    if (result instanceof CognitoUserSession) {
      const id = result.getIdToken().payload;
      console.log(id);
      const stringId = md5(JSON.stringify(id));
      setInSession(true);
      toast.success('Logged in successfully.');
      navigate(`/loggedIn/${stringId}`);
    } else {
      toast.error(`Log in failed: ${result}.`);
    }
    setIsLoading(false);
    setFormFields(defaultFormFields);
  };
  return (
    <SignInContainer>
      <ToastContainer />
      <Form onSubmit={handleOnSubmit}>
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
        <Button type="submit" disabled={isLoading}>
          {isLoading ? '...LOADING' : 'SUBMIT'}
        </Button>
      </Form>
    </SignInContainer>
  );
}

export default SignInForm;
