import { ChangeEvent, useState, FormEvent } from 'react';
import { createCognitoSignUp } from 'utils/amazon-cognito/amazon-cognito.utils';
import FormInput from 'components/form-input/form-input.component';
import { toast, ToastContainer } from 'react-toastify';
import { SignUpContainer } from './sign-up-form.styles';

const defaultFormFields = {
  email: '',
  name: '',
  password: '',
};

function SignUpForm(): JSX.Element {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    email, password, name,
  } = formFields;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = event.target;
    setFormFields({ ...formFields, [inputName]: value });
  };

  const handleOnSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const result = await createCognitoSignUp(email, password, name);
    console.log(result);
    if (result instanceof Error) {
      toast.error(result.message);
    } else if (!result) {
      toast.error('Oops, something went wrong');
    } else {
      toast.success('User created successfully');
    }
    setFormFields(defaultFormFields);
  };

  return (
    <SignUpContainer>
      <ToastContainer />
      <form onSubmit={handleOnSubmit}>
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
