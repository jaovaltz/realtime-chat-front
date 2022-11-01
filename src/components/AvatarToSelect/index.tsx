type AvatarToSelectProps = {
  avatarImage: string
}

export function AvatarToSelect({ avatarImage }: AvatarToSelectProps) {
  return (
    <img
      style={{
        width: 200,
        height: 200,
        borderRadius: '50%',
        cursor: 'pointer'
      }}
      src={avatarImage}
      alt="avatar"
    />
  )
}
