import { Container, Stack, StackProps, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type SelectAContactProps = {
  username?: string
} & StackProps

export function SelectAContact({ username, ...props }: SelectAContactProps) {
  return (
    <Stack height="100%" justifyContent="center" alignItems="center" {...props}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <img
          style={{ height: '200px' }}
          src="https://i.pinimg.com/originals/f7/ed/b6/f7edb634f9dbf21e8dc65134ddd02fec.png"
          alt="img not found"
        />
        <Typography fontSize={38} variant="h1">
          Bem vindo {username}!
        </Typography>
        <Typography fontWeight={600}>
          Por favor selecione um contato para começar a conversar ou{' '}
          <Link to="/home">clique aqui</Link>
          para voltar para a página principal
        </Typography>
      </Container>
    </Stack>
  )
}
