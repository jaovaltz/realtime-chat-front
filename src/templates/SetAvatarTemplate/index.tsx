import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Stack, Typography } from '@mui/material'

import { StackPageCard } from 'components/StackPageCard'
import { ButtonToSelectAvatar } from 'components/ButtonToSelectAvatar'
import { AvatarToSelect } from 'components/AvatarToSelect'

import { handleSubmit } from './functions/handleSubmit'

import { useUserContext } from 'context/UserContext'
import { useSetAvatarContext } from 'context/SetAvatarImageContext'

export function SetAvatarTemplate() {
  const { token, setCurrentUser } = useUserContext()
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
            <ButtonToSelectAvatar
              comparator={avatarSelected === avatarImage}
              avatarImage={avatarImage}
              setAvatarImage={setAvatarSelected}
            >
              <AvatarToSelect avatarImage={avatarImage} />
            </ButtonToSelectAvatar>
          ))}
        </Stack>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Button
            onClick={() =>
              handleSubmit(avatarSelected, navigate, token, setCurrentUser)
            }
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
