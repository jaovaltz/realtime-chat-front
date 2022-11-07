import { Avatar, AvatarProps } from '@mui/material'

type AvatarCustomProps = {
  size?: string
} & AvatarProps

export function AvatarCustom({ src, size, ...props }: AvatarCustomProps) {
  return (
    <Avatar
      src={src}
      sizes={size ? size : '100px'}
      sx={{
        border: '1px solid #4e0eff'
      }}
      {...props}
    />
  )
}
