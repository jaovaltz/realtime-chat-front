import { TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

type MessageFieldProps = {
  toUserId: number
  currentUserId: number
  handleSend: any
}

export function MessageField({
  handleSend,
  toUserId,
  currentUserId
}: MessageFieldProps) {
  return (
    <TextField
      autoComplete="off"
      placeholder="your message goes here"
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
            onClick={() => console.log('a')}
          />
        )
      }}
    />
  )
}
