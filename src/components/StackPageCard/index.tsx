import { Stack, StackProps } from '@mui/material'

type StackPageCardProps = {
  children: React.ReactNode
} & StackProps

export function StackPageCard({ children, ...props }: StackPageCardProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100vh"
      {...props}
    >
      {children}
    </Stack>
  )
}
