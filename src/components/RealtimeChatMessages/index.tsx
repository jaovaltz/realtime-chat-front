import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Stack, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

import { MessageField } from './components/MessageField'
import { MessageFrom } from './components/MessageFrom'
import { RealtimeChatBox } from './components/RealtimeChatBox'

export function RealtimeChatMessages({
  currentContact,
  handleSend,
  token,
  messages
}: any) {
  const navigate = useNavigate()

  return (
    <Stack height="100%" padding="20px">
      <Stack height="5%" justifyContent="space-between" direction="row">
        <Stack alignItems="center" direction="row" spacing={1}>
          <Avatar
            src={currentContact.profilePicture}
            sx={{ height: '50px', width: '50px', border: '2px solid grey' }}
          />
          <Typography fontSize={28} fontWeight={700}>
            {currentContact.username}
          </Typography>
        </Stack>
        <Button color="inherit">
          <HomeIcon onClick={() => navigate('/home')} />
        </Button>
      </Stack>
      <Stack paddingY="50px" height="82%">
        <RealtimeChatBox>
          <MessageFrom messages={messages} />
        </RealtimeChatBox>
      </Stack>
      <Stack>
        <MessageField
          token={token}
          handleSend={handleSend}
          contactId={currentContact && currentContact.id}
        />
      </Stack>
    </Stack>
  )
}
