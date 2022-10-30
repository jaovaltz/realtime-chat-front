import { Controller } from 'react-hook-form'
import { TextField, TextFieldProps } from '@mui/material'

type ControlTextFieldProps = {
  control: any
  name: string
  label: string
} & TextFieldProps

export function ControlTextField({
  control,
  name,
  label,
  ...props
}: ControlTextFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          autoComplete="off"
          placeholder={label}
          color="secondary"
          variant="outlined"
          focused
          error={!!error}
          helperText={error?.message}
          InputLabelProps={{ style: { color: '#ffffff' } }}
          fullWidth
          {...field}
          {...props}
        />
      )}
    />
  )
}
