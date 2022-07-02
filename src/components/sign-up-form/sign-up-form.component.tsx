import { ChangeEvent, useState, FormEvent } from 'react';
import { createCognitoSignUp } from 'utils/amazon-cognito/amazon-cognito.utils';
import FormInput from 'components/form-input/form-input.component';
import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
  email: '',
  name: '',
  password: '',
  userName: '',
};

function SignUpForm(): JSX.Element {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    email, password, userName, name,
  } = formFields;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = event.target;
    setFormFields({ ...formFields, [inputName]: value });
  };

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    createCognitoSignUp(email, password, userName, name);
    setFormFields(defaultFormFields);
  };

  return (
    <SignUpContainer>
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
          label="NAME"
          required
          type="text"
          name="name"
          value={name}
          onChange={handleOnChange}
        />
        <FormInput
          label="EMAIL"
          required
          type="email"
          name="email"
          value={email}
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
    </SignUpContainer>
  );
}

export default SignUpForm;
