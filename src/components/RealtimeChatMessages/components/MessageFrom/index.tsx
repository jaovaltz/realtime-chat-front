import { Stack, Typography } from '@mui/material'

export function MessageFrom({ messages }: any) {
  return (
    <Stack spacing={2.5}>
      {messages?.map((message: any, key: number) => (
        <Stack
          key={key}
          sx={{ maxWidth: '400px' }}
          paddingX="20px"
          paddingY="10px"
          borderRadius="10px"
          bgcolor={message.fromSender ? 'secondary.main' : '#3D2E66'}
          alignSelf={message.fromSender ? 'flex-end' : 'flex-start'}
          textAlign={message.fromSender ? 'right' : 'left'}
        >
          <Typography
            key={key}
            sx={{ wordWrap: 'break-word' }}
            fontSize={18}
            fontWeight={600}
          >
            {message.message}
          </Typography>
        </Stack>
      ))}
    </Stack>
  )
}
