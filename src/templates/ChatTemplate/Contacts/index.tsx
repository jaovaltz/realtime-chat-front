import { Grid, Stack, Typography } from '@mui/material'

import { AvatarCustom } from 'components/AvatarCustom'
import { ContactCard } from 'components/ContactCard'
import { ContactsBox } from 'components/ContactsBox'

import { useChatContext } from 'context/ChatContext'
import { useUserContext } from 'context/UserContext'

import { handleContactClick } from './functions/handleContactClick'

export function Contacts() {
  const { currentUser } = useUserContext()
  const { contacts, currentContact, setCurrentContact } = useChatContext()

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
          <img
            height="60px"
            alt="a"
            src="https://cdn.shopify.com/s/files/1/0254/0516/1520/files/RGB__V6.1.png?v=1633671894"
          />
          <Typography fontSize={38} variant="h1">
            contatos
          </Typography>
        </Stack>
        <ContactsBox>
          <Stack spacing={2}>
            {contacts?.map((contact: any, key: number) => {
              return (
                <ContactCard
                  key={key}
                  comparatorContact={currentContact === contact?.id}
                  setCurrentContact={setCurrentContact}
                  handleContactClick={handleContactClick}
                  contactId={contact.id}
                  name={contact.username}
                  profilePicture={contact.profilePicture}
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
          <AvatarCustom
            src={currentUser?.profilePicture}
            sx={{ height: '45px', width: '45px' }}
          />
          <Typography fontSize={28} variant="h1">
            {currentUser?.username}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  )
}
