import { useState } from 'react'
import { TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

type MessageFieldProps = {
  contactId?: any
  handleSend: any
  token?: string
}

export function MessageField({
  handleSend,
  contactId,
  token
}: MessageFieldProps) {
  const [message, setMessage] = useState('')

  return (
    <TextField
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      autoComplete="off"
      placeholder="digite sua mensagem aqui..."
      color="secondary"
      sx={{
        input: {
          color: 'white',
          background: '#1e1e3b',
          borderRadius: '10px'
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'transparent'
          },
          '&:hover fieldset': {
            borderColor: 'transparent'
          },
          '&.Mui-focused fieldset': {
            borderColor: 'transparent'
          }
        },
        '& .MuiInputBase-root': {
          background: '#1e1e3b',
          borderRadius: '10px'
        }
      }}
      InputProps={{
        endAdornment: (
          <SendIcon
            sx={{ cursor: 'pointer' }}
            color="secondary"
            onClick={() =>
              handleSend(contactId, message, token) && setMessage('')
            }
          />
        )
      }}
    />
  )
}
