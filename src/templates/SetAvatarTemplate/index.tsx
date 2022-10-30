import { useState } from 'react'
import { Button, Container, Stack, Typography } from '@mui/material'

import { StackPageCard } from 'components/StackPageCard'
import { useSetAvatarContext } from 'context/SetAvatarImageContext'

import { handleSubmit } from './functions/handleSubmit'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from 'context/UserContext'

export function SetAvatarTemplate() {
  const { token } = useUserContext()
  const { avatarImages } = useSetAvatarContext()

  const [avatarSelected, setAvatarSelected] = useState<string | null>(null)

  const navigate = useNavigate()

  return (
    <StackPageCard spacing={3}>
      <Typography fontSize={44} variant="h1">
        Escolha um avatar
      </Typography>
      <Stack spacing={10} alignItems="center">
        <Stack direction="row" spacing={3} alignItems="center">
          {avatarImages?.map((avatarImage, key) => (
            <Button
              key={key}
              onClick={() => setAvatarSelected(avatarImage)}
              sx={
                avatarSelected === avatarImage
                  ? { border: '5px solid #4e0eff', borderRadius: '200px' }
                  : { border: '5px solid', borderRadius: '200px' }
              }
            >
              <img
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
                key={key}
                src={avatarImage}
                alt="avatar"
              />
            </Button>
          ))}
        </Stack>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Button
            onClick={() => handleSubmit(avatarSelected, navigate, token)}
            variant="contained"
            color="secondary"
            disabled={!avatarSelected}
          >
            Selecionar como avatar
          </Button>
        </Container>
      </Stack>
    </StackPageCard>
  )
}
