import { SyntheticEvent, useState } from 'react';
import { createCognitoSignUp } from 'utils/amazon-cognito/amazon-cognito.utils';

function SignInForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    createCognitoSignUp(email, password, userName, name);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          aria-label="name"
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          aria-label="username"
          type="text"
          name="userName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          aria-label="email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          aria-label="password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default SignInForm;
