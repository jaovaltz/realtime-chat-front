import { Box, BoxProps } from '@mui/material'

type ContactsBoxProps = {
  children: React.ReactNode
} & BoxProps

export function ContactsBox({ children }: ContactsBoxProps) {
  return (
    <Box
      sx={{
        mb: 2,
        display: 'flex',
        flexDirection: 'column',
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
    >
      {children}
    </Box>
  )
}
