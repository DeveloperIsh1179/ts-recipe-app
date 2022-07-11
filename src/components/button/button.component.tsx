import { RefObject } from 'react';
import { StyledButton } from './button.styles';

type ButtonName = {
  name: string;
  type: 'submit' | 'reset' | 'button';
};

function Button(props: ButtonName): JSX.Element {
  const { name, type } = props;
  return (
    <div>
      <StyledButton type={type}>
        {name}
      </StyledButton>
    </div>
  );
}

export default Button;
