import { useNavigate } from 'react-router-dom'
import { Button, Stack } from '@mui/material'

import { useUserContext } from 'context/UserContext'

export function UserLoggedButtons() {
  const navigate = useNavigate()
  const { handleLogout } = useUserContext()

  return (
    <Stack direction="row" spacing={3}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate('/chat')}
      >
        Ir para o chat
      </Button>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Sair da conta
      </Button>
    </Stack>
  )
}
