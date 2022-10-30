import { api } from 'services/api'

export async function postUser(user: any) {
  try {
    const response = await api.post('/auth/register', user)
    return response
  } catch (error: any) {
    return error.response
  }
}
