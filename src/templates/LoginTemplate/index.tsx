import { useForm } from 'react-hook-form'
import { Stack, Typography } from '@mui/material'

import { ContainerCardForm } from 'components/ContainerCardForm'
import { ButtonCustom } from 'components/ButtonCustom'
import { StackPageCard } from 'components/StackPageCard'

import { FormForLoginTemplate } from './FormForLogintemplate'

import { handleSubmit } from './functions/handleSubmit'
import { defaultValues } from './functions/defaultValues'
import { resolver } from './functions/resolver'

import { useUserContext } from 'context/UserContext'

export function LoginTemplate() {
  const { setToken } = useUserContext()
  const methods = useForm({ defaultValues, resolver })

  return (
    <StackPageCard>
      <ContainerCardForm
        onSubmit={methods.handleSubmit((data) =>
          handleSubmit(data, methods.setError, setToken)
        )}
      >
        <Stack spacing={3}>
          <Typography variant="h1" fontSize={42}>
            Entrar
          </Typography>
          <FormForLoginTemplate control={methods.control} />
          <Stack spacing={3} alignItems="center">
            <ButtonCustom type="submit">Cadastrar</ButtonCustom>
            <Typography>
              Não tem uma conta? Então clique aqui e cadastre-se já
            </Typography>
          </Stack>
        </Stack>
      </ContainerCardForm>
    </StackPageCard>
  )
}
