import { Stack, Typography } from '@mui/material'

import { useUserContext } from 'context/UserContext'
import { UnloggedButtons } from './UnloggedButtons'
import { UserLoggedButtons } from './UserLoggedButtons'

export function HomeTemplate() {
  const { currentUser } = useUserContext()

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <img
        style={{ width: '300px' }}
        alt="img not found"
        src="https://cdn.cdnlogo.com/logos/g/35/galaxy.svg"
      />
      <Typography fontSize={42} variant="h1">
        Seja bem vindo ao chat!
      </Typography>
      {currentUser ? <UserLoggedButtons /> : <UnloggedButtons />}
    </Stack>
  )
}
