import { Avatar, Stack, Typography } from '@mui/material'

type ContactCardProps = {
  contact: any
  comparatorContact: any
  handleContactClick: (contact: string) => void
}

export function ContactCard({
  contact,
  comparatorContact,
  handleContactClick
}: ContactCardProps) {
  return (
    <Stack
      spacing={1.5}
      direction="row"
      width="98%"
      padding="10px"
      borderRadius={10}
      bgcolor={comparatorContact ? '#adacac' : '#595971'}
      alignItems="center"
      sx={{
        cursor: 'pointer',
        '&:hover': { backgroundColor: 'grey' }
      }}
      onClick={() => handleContactClick(contact)}
    >
      <Avatar
        src={contact?.profilePicture}
        sx={{ width: 50, height: 50, border: '0.5px grey solid' }}
      />
      <Stack spacing={-0.5}>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize={20}
          variant="h3"
        >
          {contact?.username}
        </Typography>
      </Stack>
    </Stack>
  )
}
