import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'

import { useUserContext } from 'context/UserContext'

import { ContainerCardForm } from 'components/ContainerCardForm'
import { ButtonCustom } from 'components/ButtonCustom'
import { StackPageCard } from 'components/StackPageCard'

import { handleSubmit } from './functions/handleSubmit'
import { defaultValues } from './functions/defaultValues'
import { resolver } from './functions/resolver'
import { FormForRegisterTemplate } from './FormForRegisterTemplate'

export function RegisterTemplate() {
  const methods = useForm({ defaultValues, resolver })

  const { setToken } = useUserContext()
  const navigate = useNavigate()

  return (
    <StackPageCard>
      <ContainerCardForm
        onSubmit={methods.handleSubmit((data) =>
          handleSubmit(data, methods.setError, setToken, navigate)
        )}
      >
        <Stack spacing={3}>
          <Typography variant="h1" fontSize={42}>
            Cadastre-se
          </Typography>
          <FormForRegisterTemplate control={methods.control} />
          <Stack spacing={3} alignItems="center">
            <ButtonCustom type="submit">Cadastrar</ButtonCustom>
            <Typography>
              Já tem uma conta? Então <Link to="/login">clique aqui</Link> para
              logar-se
            </Typography>
          </Stack>
        </Stack>
      </ContainerCardForm>
    </StackPageCard>
  )
}
