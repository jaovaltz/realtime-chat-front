import { api } from 'services/api'

export async function loginUser(user: any) {
  try {
    const response = await api.post('/auth/login', user)
    return response
  } catch (error: any) {
    return error.response
  }
}
