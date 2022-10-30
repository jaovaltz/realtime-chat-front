import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  username: yup.string().required('É necessário informar um nome de usuário'),
  password: yup.string().required('É necessário informar uma senha')
})

export const resolver = yupResolver(schema)
