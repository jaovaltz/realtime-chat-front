import { Avatar, Stack, Typography } from '@mui/material'

type ContactCardProps = {
  contactId: string
  name: string
  profilePicture: string
  comparatorContact: any
  setCurrentContact: (contact: string) => void
  handleContactClick: (
    contact: string,
    setCurrentContact: (contact: string) => void
  ) => void
}

export function ContactCard({
  name,
  profilePicture,
  contactId,
  comparatorContact,
  setCurrentContact,
  handleContactClick
}: ContactCardProps) {
  return (
    <Stack
      spacing={1.5}
      direction="row"
      width="98%"
      padding="10px"
      borderRadius={10}
      bgcolor={comparatorContact ? '#151567' : '#595971'}
      alignItems="center"
      component="button"
      border="0.5px solid trasnparent"
      sx={{
        cursor: 'pointer',
        '&:hover': { backgroundColor: 'grey' }
      }}
      onClick={() => handleContactClick(contactId, setCurrentContact)}
    >
      <Avatar src={profilePicture} sx={{ width: 50, height: 50 }} />
      <Stack spacing={-0.5}>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize={20}
          variant="h3"
        >
          {name}
        </Typography>
      </Stack>
    </Stack>
  )
}
