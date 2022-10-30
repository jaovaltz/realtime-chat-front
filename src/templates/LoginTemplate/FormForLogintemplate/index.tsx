import { Stack } from '@mui/material'
import { ControlTextField } from 'components/ControlTextField'

export function FormForLoginTemplate({ control }: any) {
  return (
    <Stack spacing={3}>
      <ControlTextField name="username" label="Username" control={control} />
      <ControlTextField
        name="password"
        label="Senha"
        type="password"
        control={control}
      />
    </Stack>
  )
}
