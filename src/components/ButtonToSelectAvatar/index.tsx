import { Button, ButtonProps } from '@mui/material'

type ButtonToSelectAvatarProps = {
  children: React.ReactNode
  comparator: any
  avatarImage: string
  setAvatarImage: (avatarImage: string) => void
} & ButtonProps

export function ButtonToSelectAvatar({
  children,
  comparator,
  setAvatarImage,
  avatarImage,
  ...props
}: ButtonToSelectAvatarProps) {
  return (
    <Button
      {...props}
      onClick={() => setAvatarImage(avatarImage)}
      sx={
        comparator
          ? { border: '5px solid #4e0eff', borderRadius: '200px' }
          : { border: '5px solid', borderRadius: '200px' }
      }
    >
      {children}
    </Button>
  )
}
