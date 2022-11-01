import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function UnloggedButtons() {
  const navigate = useNavigate()

  return (
    <Stack direction="row" spacing={3}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate('/login')}
      >
        Fazer login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate('/register')}
      >
        Registrar-se
      </Button>
    </Stack>
  )
}
