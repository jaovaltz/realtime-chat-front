import { Avatar, AvatarProps } from '@mui/material'

type AvatarCustomProps = {
  size?: string
} & AvatarProps

export function AvatarCustom({ src, size, ...props }: AvatarCustomProps) {
  return (
    <Avatar
      sx={{
        height: size ? '50px' : `${size}px`,
        width: size ? '50px' : `${size}px`,
        border: '2px solid black'
      }}
      {...props}
    />
  )
}
