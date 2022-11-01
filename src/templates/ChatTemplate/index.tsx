import { Container, Grid, Stack } from '@mui/material'

import { Contacts } from './Contacts'
import { RealtimeChat } from './RealtimeChat'

export function ChatTemplate() {
  return (
    <Stack height="100vh" justifyContent="center">
      <Container>
        <Stack border="4px black solid" height="85vh">
          <Grid container sx={{ height: '100%' }}>
            <Contacts />
            <RealtimeChat />
          </Grid>
        </Stack>
      </Container>
    </Stack>
  )
}
