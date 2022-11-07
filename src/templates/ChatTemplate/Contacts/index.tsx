import { Grid, Stack, Typography } from '@mui/material'

import { AvatarCustom } from 'components/AvatarCustom'
import { ContactCard } from 'components/ContactCard'
import { ContactsBox } from 'components/ContactsBox'

import { useChatContext } from 'context/ChatContext'
import { useUserContext } from 'context/UserContext'

import { getMessages } from 'services/gets/getMessages'

export function Contacts() {
  const { currentUser, token } = useUserContext()
  const {
    contacts,
    currentContact,
    setCurrentContact,
    setCurrentContactMessages
  } = useChatContext()

  const handleClick = async (contact: any) => {
    setCurrentContact(contact)

    const messages = await getMessages(contact.id, token)
    setCurrentContactMessages(messages.data)
  }

  return (
    <Grid item md={4} sx={{ backgroundColor: '#1E1E3B', height: '100%' }}>
      <Stack padding="15px" spacing={4}>
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          height="70px"
          direction="row"
        >
          <Typography fontSize={42} variant="h1">
            Seus contatos
          </Typography>
        </Stack>
        <ContactsBox>
          <Stack spacing={2}>
            {contacts?.map((contact: any, key: number) => {
              return (
                <ContactCard
                  key={key}
                  comparatorContact={currentContact?.id === contact?.id}
                  handleContactClick={handleClick}
                  contact={contact}
                />
              )
            })}
          </Stack>
        </ContactsBox>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <AvatarCustom src={currentUser?.profilePicture} />
          <Typography fontSize={28} variant="h1">
            {currentUser?.username}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  )
}
