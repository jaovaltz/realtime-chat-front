import { Grid } from '@mui/material'
import { RealtimeChatMessages } from 'components/RealtimeChatMessages'

import { SelectAContact } from 'components/SelectAContact'

import { useChatContext } from 'context/ChatContext'
import { useUserContext } from 'context/UserContext'
import { postNewMessage } from 'services/posts/postNewMessage'

export function RealtimeChat() {
  const {
    socket,
    currentContact,
    currentContactMessages,
    setCurrentContactMessages
  } = useChatContext()
  const { token, currentUser } = useUserContext()

  async function handleSend(contactId: string, message: string, token: string) {
    await postNewMessage(contactId, message, token)

    socket.current.emit('send-msg', {
      from: token,
      to: currentContact.id,
      message
    })

    setCurrentContactMessages((prev: any) => [
      ...prev,
      { message, fromSender: true }
    ])
  }

  return (
    <Grid md={8} item>
      {currentContact ? (
        <RealtimeChatMessages
          currentContact={currentContact}
          messages={currentContactMessages}
          token={token}
          handleSend={handleSend}
        />
      ) : (
        <SelectAContact username={currentUser && currentUser.username} />
      )}
    </Grid>
  )
}
