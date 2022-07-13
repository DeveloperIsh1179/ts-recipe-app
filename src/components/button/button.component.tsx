import { RefObject } from 'react';
import { StyledButton } from './button.styles';

type ButtonProps = {
  type: 'submit' | 'reset' | 'button';
  disabled: boolean;
  children: string
};

function Button(props: ButtonProps): JSX.Element {
  const { children, type, disabled } = props;
  return (
    <div>
      <StyledButton disabled={disabled} type={type}>
        {children}
      </StyledButton>
    </div>
  );
}

export default Button;
