import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  username: yup
    .string()
    .required('É necessário informar um nome de usuário')
    .min(5, 'O nome de usuário deve ter no mínimo 3 caracteres')
    .max(20, 'O nome de usuário deve ter no máximo 20 caracteres')
    .matches(
      /^[a-zA-Z0-9]+$/,
      'O nome de usuário deve conter apenas letras e números'
    )
    .trim(),
  email: yup
    .string()
    .email('O e-mail precisa ser valido')
    .required('É necessário informar um email')
    .max(50, 'O email deve ter no máximo 50 caracteres')
    .trim(),
  password: yup
    .string()
    .required('É necessário informar uma senha')
    .min(8, 'A senha deve ter no mínimo 6 caracteres')
    .max(50, 'A senha deve ter no máximo 50 caracteres')
    .trim(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('É necessário confirmar a senha')
})

export const resolver = yupResolver(schema)
