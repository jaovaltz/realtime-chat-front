import { Grid } from '@mui/material'
import { RealtimeChatMessages } from 'components/RealtimeChatMessages'

import { handleSend } from './functions/handleSend'
import { useChatContext } from 'context/ChatContext'
import { SelectAContact } from 'components/SelectAContact'

export function RealtimeChat() {
  const { currentContact } = useChatContext()

  return (
    <Grid md={8} item>
      {currentContact ? (
        <RealtimeChatMessages handleSend={handleSend} />
      ) : (
        <SelectAContact />
      )}
    </Grid>
  )
}
