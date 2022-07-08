import { ChangeEvent } from 'react';
import { FormInputLabel, Group, Input } from './form-input.styles';

interface InputProps {
  label: string,
  required: boolean,
  name: string,
  type: string,
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function FormInput({
  label, required, name, type, value, onChange,
}: InputProps): JSX.Element {
  return (
    <Group>
      <Input
        required={required}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      {label
        && (
        <FormInputLabel shrink={value.length}>
          {label}
        </FormInputLabel>
        )}
    </Group>
  );
}

export default FormInput;
