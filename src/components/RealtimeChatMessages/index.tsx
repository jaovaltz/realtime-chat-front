import { Avatar, Button, Stack, Typography } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'

import { MessageField } from 'components/RealtimeChatMessages/components/MessageField'

export function RealtimeChatMessages({ handleSend }: any) {
  return (
    <Stack height="100%" padding="20px">
      <Stack justifyContent="space-between" direction="row">
        <Stack alignItems="center" direction="row" spacing={1}>
          <Avatar sx={{ height: '50px', width: '50px' }} />
          <Typography fontWeight={700}>username</Typography>
        </Stack>
        <Button color="inherit">
          <PowerSettingsNewIcon />
        </Button>
      </Stack>
      <Stack height="85%"></Stack>
      <Stack>
        <MessageField handleSend={handleSend} toUserId={1} currentUserId={1} />
      </Stack>
    </Stack>
  )
}
