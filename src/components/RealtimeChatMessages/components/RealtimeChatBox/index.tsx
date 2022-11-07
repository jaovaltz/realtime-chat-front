import { Stack, StackProps } from '@mui/material'

type RealtimeChatBoxProps = {
  children: React.ReactNode
} & StackProps

export function RealtimeChatBox({ children, ...props }: RealtimeChatBoxProps) {
  return (
    <Stack
      padding="10px"
      sx={{
        mb: 2,
        display: 'flex',
        flexDirection: 'column-reverse',
        height: 600,
        overflow: 'hidden',
        overflowY: 'scroll',

        '&::-webkit-scrollbar': {
          width: '0.2em'
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'grey',
          borderRadius: 8
        }
      }}
      {...props}
    >
      {children}
    </Stack>
  )
}
