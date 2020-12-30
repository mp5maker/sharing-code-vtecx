import * as React from 'react'
import TextField from '@material-ui/core/TextField'

export interface InputFieldPropsInterface {
  name?: string;
  onChange?: ((params: any) => any) | ((params: any) => void);
  variant?: "outlined" | "filled";
  placeholder?: string;
  autoComplete?: 'off'
}

export const InputField: React.FC<InputFieldPropsInterface> = ({
  ...props
}): JSX.Element => {

  return (
    <TextField
      {...props} />
  )
}