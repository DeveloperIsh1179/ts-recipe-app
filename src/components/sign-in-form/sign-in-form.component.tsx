import { ChangeEvent, useState, FormEvent } from 'react';
import { createCognitoSignUp } from 'utils/amazon-cognito/amazon-cognito.utils';
import { Input, SignInContainer } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  name: '',
  password: '',
  userName: '',
};

function SignInForm(): JSX.Element {
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
  };

  return (
    <SignInContainer>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">
          NAME:
          <Input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="username">
          USERNAME:
          <Input
            id="username"
            type="text"
            name="userName"
            value={userName}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor='email'>
          EMAIL:
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="password">
          PASSWORD:
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </SignInContainer>
  );
}

export default SignInForm;
