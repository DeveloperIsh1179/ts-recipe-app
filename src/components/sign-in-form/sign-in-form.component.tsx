import { useState, ChangeEvent, FormEvent } from 'react';
import FormInput from 'components/form-input/form-input.component';
import { signInCognito } from 'utils/amazon-cognito/amazon-cognito.utils';
import { SignInContainer } from './sign-in-form.styles';

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

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    signInCognito(userName, password);
    // setFormFields(defaultFormFields);
  };
  return (
    <SignInContainer>
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
